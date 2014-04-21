<?php

namespace JaztecAclAdmin\Controller;

use JaztecAcl\Controller\AuthorizedController;
use Zend\View\Model\JsonModel;

abstract class AbstractController extends AuthorizedController
{
    /**
     * Module specific variables.
     */

    /**
     * @var \JaztecAclAdmin\Mapper\PrivilegesMapper
     */
    protected $privilegesMapper;

    /**
     * @var \JaztecAclAdmin\Mapper\RolesMapper
     */
    protected $rolesMapper;

    /**
     * @var \JaztecAclAdmin\Mapper\ResourcesMapper
     */
    protected $resourcesMapper;

    /**
     * Return a successfull landing to the index page.
     * 
     * @return \Zend\View\Model\JsonModel
     */
    public function indexAction()
    {
        return new JsonModel(
            array(
                'success' => true,
            )
        );
    }
    
    /**
     * Will create an entity.
     */
    abstract public function createAction();

    /**
     * Will read an entity
     */
    abstract public function readAction();

    /**
     * Will update an entity
     */
    abstract public function updateAction();

    /**
     * Will delete an entity
     */
    abstract public function destroyAction();

    /**
     * Module specific getters.
     */
    /**
     * Returns an instance of the PrivelegesMapper.
     * 
     * @return \JaztecAclAdmin\Mapper\PrivilegesMapper $mapper
     */
    protected function getPrivilegesMapper()
    {
        if ($this->privilegesMapper === null) {
            $this->privilegesMapper = $this->getServiceLocator()->get('jaztecacladmin-privileges');
        }
        return $this->privilegesMapper;
    }

    /**
     * Returns an instance of the RolesMapper.
     * 
     * @return \JaztecAclAdmin\Mapper\RolesMapper $mapper
     */
    protected function getRolesMapper()
    {
        if ($this->rolesMapper === null) {
            $this->rolesMapper = $this->getServiceLocator()->get('jaztecacladmin-roles');
        }
        return $this->rolesMapper;
    }

    /**
     * Returns an instande of the ResourcesMapper.
     * 
     * @return \JaztecAclAdmin\Mapper\ResourcesMapper $mapper
     */
    protected function getResourcesMapper()
    {
        if ($this->resourcesMapper === null) {
            $this->resourcesMapper = $this->getServiceLocator()->get('jaztecacladmin-resources');
        }
        return $this->resourcesMapper;
    }
}
