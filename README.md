# `rn-component-generator`
### Simple, customizable utility for adding new React components to your project.

This project is a globally-installable CLI for adding new React native components. It's dead simple to use, and requires no configuration, although it's easy to customize it to fit your project's coding style.

<br />

## Features
- Simple CLI interface for adding Component, PureComponent, or Stateless Functional components.
- Uses [Prettier](https://github.com/prettier/prettier) to stylistically match the existing project.
- Offers global config, which can be overridden on a project-by-project basis.
- Colourful terminal output!


<br />

## Quickstart

Install via NPM:

```bash
$ npm i -g rn-component-generator
```
<br />

```bash
$ npm link rn-component-generator
```

## Configuration

Configuration can be done through 3 different ways:

- Creating a global `.rn-component-generator-config.json` in your home directory (`~/.rn-component-generator-config.json`).
- Creating a local `.rn-component-generator-config.json` in your project's root directory.
- Command-line arguments.

The resulting values are merged, with command-line values overwriting local values, and local values overwriting global ones.

<br />

## API Reference

### Type

Control the type of component created:
- `class` for a traditional Component class (default),
- `pure-class` for a PureComponent class,
- `functional` for a stateless functional component.

Legacy `createClass` components are not supported, although support would be easy to add. Feel free to open an issue (or a PR!).

**Usage:**

Command line: `rn-component-generator Test --type <value>` or `-t <value>`

JSON config: `{ "type": <value> }`
<br />

### Directory

Controls the desired directory for the created component. Defaults to `src/`

Legacy `createClass` components are not supported, although support would be easy to add. Feel free to open an issue (or a PR!).

**Usage:**

Command line: `rn-component-generator Test --dir <value>` or `-d <value>`

JSON config: `{ "dir": <value> }`
<br />

### File Extension

Controls the file extension for the created components. Can be either `js` (default) or `jsx`.

**Usage:**

Command line: `rn-component-generator Test --extension <value>` or `-x <value>`

JSON config: `{ "extension": <value> }`
<br />