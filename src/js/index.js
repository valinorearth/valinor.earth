import Turbolinks from "turbolinks";
import { Application } from "stimulus";
import AnimatedNumber from "stimulus-animated-number";
import { definitionsFromContext } from "stimulus/webpack-helpers";

Turbolinks.start();
const application = Application.start();
const context = require.context("./controllers", true, /\.js$/);
application.load(definitionsFromContext(context));
application.register("animated-number", AnimatedNumber);
