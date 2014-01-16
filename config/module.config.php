<?php

namespace JaztecAclAdmin;

return array(
    /**
     * KJ Sencha config.
     */
    'kjsencha'        => array(
        'direct'       => array(
            'modules' => array(
                'JaztecAclAdmin' => array(
                    'namespace' => 'JaztecAclAdmin\Direct',
                    'directory' => __DIR__ . '/../src/JaztecAclAdmin/Direct',
                ),
            ),
        ),
        'bootstrap'    => array(
            'default' => array(
                'modules'   => array(
                    'JaztecAclAdmin' => array(
                        'namespace' => 'JaztecAclAdmin.direct'
                    ),
                ),
                // Ext.Ux classes toevoegen aan de autoloader.
                'paths'     => array(
                    'JaztecAclAdmin' => '/js/jaztecacladmin',
                ),
            ),
        ),
    ),
    /**
     * AssetManager config
     */
    'asset_manager'   => array(
        'resolver_configs' => array(
            'paths' => array(
                'JaztecAclAdmin' => __DIR__ . '/../public',
            ),
        ),
        'caching'          => array(
            'default' => array(
                'cache' => 'apc',
            ),
        ),
    ),
    /**
     * JaztecAcl config.
     */
    'jaztec_acl'      => array(
        'name'                => array(
            __NAMESPACE__ => 'jaztec/core-acl-admin',
        ),
        // Redirect the AuthorizedController on Acl failure.
        'redirect_controller' => false,
    ),
    /**
     * JaztecAdmin config
     */
    'jaztec_admin'    => array(
        'modules' => array(
            'controllers' => array(
                'paths' => array(
                    'JaztecAclAdmin.controller' => __DIR__ . '/../public/js/jaztecacladmin/controller',
                ),
            ),
            'stores'      => array(

            ),
            'views'       => array(
                'JaztecAclAdmin.controller.AclAdmin' => array(
                    'paths'      => array(
                        'JaztecAclAdmin.view' => __DIR__ . '/../public/js/jaztecacladmin/view',
                    ),
                ),
            ),
        ),
    ),
    /**
     * Futher confuguration.
     */
    'service_manager' => array(
        'factories' => array(
        ),
    ),
    'doctrine'        => array(
        'driver' => array(
            'jaztecadmin_driver' => array(
                'class' => 'Doctrine\ORM\Mapping\Driver\AnnotationDriver',
                'cache' => 'array',
                'paths' => array(
                    __DIR__ . '/../src/JaztecAdmin/Entity'
                )
            ),
            'orm_default'        => array(
                'drivers' => array(
                    'JaztecAdmin\Entity' => 'jaztecadmin_driver'
                )
            )
        )
    ),
);
