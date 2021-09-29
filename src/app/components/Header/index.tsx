import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Logo from 'app/images/hutty_logo.svg';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

interface Props {
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBarDiv: {
      [theme.breakpoints.down('md')]: {
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    title: {
      flexGrow: 1,
      letterSpacing: '0.05em',
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
    },
    titleSpan: {
      fontSize: '1.125rem',
      marginLeft: '17px',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    logo: {
      width: '60px',
      marginLeft: '30px',
      marginRight: '25px',
    },
  }),
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <ElevationScroll>
        <AppBar className={classes.appBarDiv}>
          <Toolbar>
            <img src={Logo} alt="Hutty Logo" className={classes.logo} />
            <Typography variant="h4" className={classes.title}>
              {'Hutty'}
              <span className={classes.titleSpan}>Your Mart. Shop Smart.</span>
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
