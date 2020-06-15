import { makeStyles } from "@material-ui/core";
import { Theme as DefaultTheme } from "@material-ui/core/styles/createMuiTheme";
import { Styles, WithStylesOptions } from "@material-ui/core/styles/withStyles";

export const useStyles = <Theme = DefaultTheme, ClassKey extends string = string>(style: Styles<Theme, {}, ClassKey>,
  options?: Omit<WithStylesOptions<Theme>, 'withTheme'>) => {
  return makeStyles(style, options)();
}
