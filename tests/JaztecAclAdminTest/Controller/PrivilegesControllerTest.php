<?php

namespace JaztecAclAdminTest\Controller;

use JaztecAclAdminTest\Bootstrap;
use JaztecAclAdmin\Controller\PrivilegesController;
use PHPUnit_Framework_TestCase;
use Zend\Mvc\Router\Http\TreeRouteStack as HttpRouter;
use Zend\Http\Response;
use Zend\Http\Request;
use Zend\Mvc\MvcEvent;
use Zend\Mvc\Router\RouteMatch;

class PrivilegesControllerTest extends \PHPUnit_Framework_TestCase
{

    /**
     * @var \JaztecAclAdmin\Controller\PrivilegesController
     */
    protected $controller;

    /**
     * @var \Zend\Http\Request
     */
    protected $request;

    /**
     * @var \Zend\Http\Response
     */
    protected $response;

    /**
     * @var \Zend\Mvc\Route\RouteMatch
     */
    protected $routeMatch;

    /**
     * @var \Zend\Mvc\MvcEvent
     */
    protected $event;

    protected function setUp()
    {
        Bootstrap::setUpAclDatabase();
        // Gather variables
        $serviceManager   = Bootstrap::getServiceManager();
        $this->controller = new PrivilegesController();
        $this->request    = new Request();
        $this->routeMatch = new RouteMatch(array(
            'controller' => 'JaztecAclAdmin\Controller\Privileges',
            'action'     => 'index',
        ));
        $this->event      = new MvcEvent();
        $config           = $serviceManager->get('Config');
        $routerConfig     = isset($config['router']) ? $config['router'] : array();
        $router           = HttpRouter::factory($routerConfig);

        // Setup the actual testcase.
        $this->event->setRouter($router);
        $this->event->setRouteMatch($this->routeMatch);
        $this->controller->setEvent($this->event);
        $this->controller->setServiceLocator($serviceManager);

        // Arranging the zfc-user services.
        $userMock = $this->getMock('ZfcUser\Entity\User');
        $authMock = $this->getMock('ZfcUser\Controller\Plugin\ZfcUserAuthentication');

        // Setup a mock for a logged in user.
        $userMock->expects($this->any())
            ->method('getId')
            ->will($this->returnValue('admin'));
        $authMock->expects($this->any())
            ->method('hasIdentity')
            ->will($this->returnValue(true));
        $authMock->expects($this->any())
            ->method('getIdentity')
            ->will($this->returnValue($userMock));

        $this->controller->getPluginManager()->setService('zfcUserAuthentication', $authMock);
    }

    /**
     * Test if the index action is accessible.
     * @covers \JaztecAclAdmin\Controller\AbstractController::indexAction
     */
    public function testIndexAction()
    {
        $this->routeMatch->setParam('action', 'index');

        $result   = $this->controller->dispatch($this->request);
        $response = $this->controller->getResponse();

        $this->assertEquals(200, $response->getStatusCode());
    }

}
