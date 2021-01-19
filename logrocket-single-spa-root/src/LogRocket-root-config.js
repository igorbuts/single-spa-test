import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@LogRocket/logrocket-single-spa-navbar",
  app: () => System.import("@LogRocket/logrocket-single-spa-navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});