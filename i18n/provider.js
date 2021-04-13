import React from "react";
import { Fragment } from "react";
import { IntlProvider } from "react-intl";
import { LOCALS } from "./locals";

import messages from "./messages";

export const Provider = ({ children, locale = LOCALS.ENGLISH }) => {
  return (
    <IntlProvider
      locale={locale}
      textComponent={Fragment}
      messages={messages[locale]}
    >
      {children}
    </IntlProvider>
  );
};

export default Provider;
