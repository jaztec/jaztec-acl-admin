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
            'controller'    => 'JaztecAclAdmin\Controller\Privileges',
            'action'        => 'index',
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
        $this->controller->getPluginManager()->setService('zfcUserAuthentication', Bootstrap::provideLogin('admin'));
    }

    /**
     * Test if the index action is accessible.
     * @covers \JaztecAclAdmin\Controller\AbstractController::indexAction
     */
    public function testIndexAction()
    {
        
    }
}
