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

        $data = array();
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
}
