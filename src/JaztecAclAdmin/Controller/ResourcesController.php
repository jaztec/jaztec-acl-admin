<?php

namespace JaztecAclAdmin\Controller;

use Zend\View\Model\JsonModel;

class ResourcesController extends AbstractController
{

    /**
     * Will create an entity.
     */
    public function createAction()
    {
        
    }

    /**
     * Will read an entity
     */
    public function readAction()
    {
        /* @var $mapper \JaztecAclAdmin\Mapper\ResourcesMapper */
        $mapper = $this->getResourcesMapper();

        $results = $mapper->findAll();

        return new JsonModel(
            array(
                'success' => true,
                'data'    => $results
            )
        );
    }

    /**
     * Will update an entity
     */
    public function updateAction()
    {
        
    }

    /**
     * Will delete an entity
     */
    public function destroyAction()
    {
        
    }
}
