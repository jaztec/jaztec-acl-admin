<?php

namespace JaztecAclAdmin;

return array(
    /**
     * KJ Sencha config.
     */
    'kjsencha'        => array(
        'library_path' => 'http://cdn.sencha.io/ext-4.2.0-gpl/',
        'js'           => array(
            'ext' => 'ext-all.js',
        ),
        'css'          => array(
            'ext' => 'resources/css/ext-all-gray.css',
        ),
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
                        'namespace' => 'JaztecAdmin.direct'
                    ),
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
