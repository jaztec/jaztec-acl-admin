<?php

namespace JaztecAclAdmin\Mapper;

use JaztecBase\Mapper\AbstractDoctrineMapper;

class BaseMapper extends AbstractDoctrineMapper
{
    /**
     * Will return an array with all the entities found.
     * 
     * @return array    An array with serialzed entities.
     */
    public function findAll()
    {
        return $this->processResult(
            $this->getRepository()->findAll(), 
            AbstractDoctrineMapper::TYPE_SERIALIZEDARRAY
        );
    }
}
