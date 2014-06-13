<?php

namespace JaztecAclAdmin\Controller;

use Zend\View\Model\JsonModel;

class PrivilegesController extends AbstractController
{

    /**
     * {@inheritDoc}
     */
    public function createAction()
    {
        
    }

    /**
     * {@inheritDoc}
     */
    public function readAction()
    {
        /* @var $mapper \JaztecAclAdmin\Mapper\PrivilegesMapper */
        $mapper = $this->getPrivilegesMapper();

        $results = $mapper->findAll();

        return new JsonModel(
            array(
                'success' => true,
                'data'    => $results
            )
        );
    }

    /**
     * {@inheritDoc}
     */
    public function updateAction()
    {
        
    }

    /**
     * {@inheritDoc}
     */
    public function destroyAction()
    {
        
    }

    /**
     * Find all requested privileges.
     * 
     * @return \Zend\View\Model\JsonModel
     */
    public function requestedAction()
    {
        /* @var $mapper \JaztecAclAdmin\Mapper\PrivilegesMapper */
        $mapper = $this->getPrivilegesMapper();

        $results = $mapper->findAllRequestedPrivileges();

        return new JsonModel(
            array(
                'success' => true,
                'data'    => $results
            )
        );
    }
}
