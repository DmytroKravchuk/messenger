/* eslint-disable global-require */
import React from "react";
import { IntlProvider } from "react-intl";

import { DEFAULT_LOCALE } from "../contstants";

const localizations = {
  ua: require("../i18n/ua_UA.json"),
  ru: require("../i18n/ru_RU.json"),
  en: require("../i18n/us_US.json"),
};

type Props = {
  children: React.ReactNode;
};

export const IntlContext = ({ children }: Props) => {
  const currentLocale = "ru";

  return (
    <IntlProvider
      locale={currentLocale}
      messages={localizations.ru}
      defaultLocale={DEFAULT_LOCALE}
    >
      {children}
    </IntlProvider>
  );
};
