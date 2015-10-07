# Grid System

This repository contains a small grid system for easy application
development. It supports 24 columns as well as `RTL` and `LTR`
layouts.

Browsers that support media queries should be supported.

## Why a new grid system?

Currently any grid system I could find made assumptions about
the layout and the style of the code. They assume some kind of
padding or margin _must_ take place for the grid. When padding
is forced on the grid it causes styles to conflict and alignment
to be off when grids become nested.

This library aims to _only_ supply a grid system. If you want
a specific padding width, then add that style. If you want
a specific margin width this library will not support it easily.

By default most grid systems use 12 columns. I've found that
the 12 column width is often not enough. So to get the best of
the math that 12 provides and a bit more space, this system
defaults to 24 columns.

## Philosophy

A grid system should:

* Make laying out content easy
* Make no assumptions about its contents
* Never apply styles such as padding or margin

If a consumer wishes to have default padding or margin think about
applying this padding or margin to the components on the site. Try to
avoid putting styles into your grid system. It conflates layout and
styling which causes many headaches later in CSS development.

## Usage

Code can be found in the css `[build/grid.css][grid-file]` file.

```html
<html dir="ltr">
    <head>
        <style src="path/to/stylesheet"></style>
    </head>
    <body>
        <div class="row">
            <div class="column column-xs-12 column-md-15 column-lg-20">Info</div>
            <div class="column column-xs-12 column-md-9 column-lg-4">Other Info</div>
        </div>
    </body>
</html>
```

`.column-*` classes must exist inside a `.row` class. When using a `.column-*` class
it must be prefaced with a `.column` class. This is done to separate the layouts into
what is common for all columns and what is specific for each media query set of columns.

## Details

Check out the source `[src/grid_system.less][grid-system]` file. It has a lot of comments on what
it is doing.

## Developing/testing

Run the following two commands in separate terminal windows to test out the grid system.

1. `grunt`
2. `cd && example && python -m SimpleHTTPServer`

[grid-file]: build/grid.css
[grid-system]: src/grid_system.less
