containers-save
===============

Docker containers backups saving script

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g containers-save
$ containers-save COMMAND
running command...
$ containers-save (--version)
containers-save/0.0.1 linux-x64 node-v16.13.1
$ containers-save --help [COMMAND]
USAGE
  $ containers-save COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`containers-save changetags`](#containers-save-changetags)
* [`containers-save help [COMMAND]`](#containers-save-help-command)
* [`containers-save plugins`](#containers-save-plugins)
* [`containers-save plugins:inspect PLUGIN...`](#containers-save-pluginsinspect-plugin)
* [`containers-save plugins:install PLUGIN...`](#containers-save-pluginsinstall-plugin)
* [`containers-save plugins:link PLUGIN`](#containers-save-pluginslink-plugin)
* [`containers-save plugins:uninstall PLUGIN...`](#containers-save-pluginsuninstall-plugin)
* [`containers-save plugins update`](#containers-save-plugins-update)

## `containers-save changetags`

Change tags

```
USAGE
  $ containers-save changetags -l <value> -f <value> -t <value>

FLAGS
  -f, --from=<value>  (required) from tag
  -l, --list=<value>  (required) json file with containers list
  -t, --to=<value>    (required) to tag

DESCRIPTION
  Change tags

EXAMPLES
  $ containers-save changetags
```

_See code: [dist/commands/changetags.ts](https://github.com/pavel-g/containers-save/blob/v0.0.1/dist/commands/changetags.ts)_

## `containers-save help [COMMAND]`

Display help for containers-save.

```
USAGE
  $ containers-save help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for containers-save.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `containers-save plugins`

List installed plugins.

```
USAGE
  $ containers-save plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ containers-save plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `containers-save plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ containers-save plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ containers-save plugins:inspect myplugin
```

## `containers-save plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ containers-save plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ containers-save plugins add

EXAMPLES
  $ containers-save plugins:install myplugin 

  $ containers-save plugins:install https://github.com/someuser/someplugin

  $ containers-save plugins:install someuser/someplugin
```

## `containers-save plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ containers-save plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ containers-save plugins:link myplugin
```

## `containers-save plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ containers-save plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ containers-save plugins unlink
  $ containers-save plugins remove
```

## `containers-save plugins update`

Update installed plugins.

```
USAGE
  $ containers-save plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
