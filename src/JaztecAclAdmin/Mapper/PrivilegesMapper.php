<?php

namespace JaztecAclAdmin\Mapper;

class PrivilegesMapper extends BaseMapper
{
    protected $entityName = 'JaztecAcl\Entity\Privilege';

    /**
     * Retreive all requested privileges.
     * 
     * @return array
     */
    public function findAllRequestedPrivileges()
    {
        return $this->processResult(
            $this->getEntityManager()->getRepository('JaztecAcl\Entity\RequestedPrivilege'),
            \JaztecBase\Mapper\AbstractDoctrineMapper::TYPE_SERIALIZEDARRAY
        );
    }
}
