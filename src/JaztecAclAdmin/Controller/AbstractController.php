<?php

namespace JaztecAclAdmin\Controller;

use JaztecAcl\Controller\AuthorizedController;

abstract class AbstractController extends AuthorizedController
{

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
}
