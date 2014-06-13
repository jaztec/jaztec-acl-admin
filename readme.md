JaztecAclAdmin
==============
[![Build Status](https://travis-ci.org/jaztec/jaztec-acl-admin.svg?branch=master)](https://travis-ci.org/jaztec/jaztec-acl-admin)

Visual module JaztecAcl component inside JaztecAdmin.

This repository is a work in progress. Currently no extensive unit testing or error handling
is done. Please use with care.

This package currently does not contain any installation script. You do however have
to install the acl package. See below or the jaztec-acl package documentation.

```sh
./php public/index.php acl database clean-install --email=[your_email] [--verbose|-v]
```

To include in your project

```sh
./composer.phar require jaztec/jaztec-acl-admin
```

or include it in the composer.json of your project with

```sh
{
    "require": {
        "jaztec/jaztec-base": "0.1.*",
        "jaztec/jaztec-acl": "0.1.*",
        "jaztec/jaztec-admin": "0.1.*"
        "jaztec/jaztec-acl-admin": "dev-master"
    }
}

```

## Dependencies

- rwoverdijk/assetmanager
- rovak/kj-sencha
- jaztec/jaztec-base
- jaztec/jaztec-acl
- jaztec/jaztec-admin