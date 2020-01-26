import { setLicenseText } from "@luciad/ria/util/License";

// eslint-disable-next-line import/no-unresolved,import/no-webpack-loader-syntax
const licenseText = require("!!raw-loader!./luciadria_development.txt").default;

setLicenseText(licenseText);

