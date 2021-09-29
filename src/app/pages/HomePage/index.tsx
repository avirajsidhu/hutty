import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from 'app/components/Header';
import UnderConstruction from 'app/images/under_construction.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },

    titleText: {
      marginTop: '90px',
      fontSize: '2rem',
      letterSpacing: '0.030em',
      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
      },
    },
    productImageHolder: {
      background: '#BCED91',
      width: '23.5%',
      marginRight: '16px',
      float: 'left',
      height: '100%',
      borderRadius: '15px',
      position: 'relative',
      marginTop: '24px',
      [theme.breakpoints.down('md')]: {
        width: '40%',
      },
    },
    productImageDiv: {
      position: 'relative',
      width: 'auto',
      marginLeft: '65px',
      [theme.breakpoints.down('md')]: {
        marginLeft: '35px',
      },
    },
    productImage: {
      [theme.breakpoints.down('md')]: {
        width: '80px',
      },
    },
    imageDiv: {
      margin: '42px auto 16px',
      padding: '0 4px 0 4px',
      display: 'block',
      textAlign: 'center',
      height: '100%',
    },
    imageSpan: {
      fontSize: '16px',
      color: '#000',
      display: 'flex',
      justifyContent: 'center',
      overflow: 'hidden',
      height: '38px',
      [theme.breakpoints.down('md')]: {
        height: '45px',
      },
    },
    underConstructionImage: {
      width: '600px',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'block',
      [theme.breakpoints.down('md')]: {
        width: '350px',
      },
    },
  }),
);

const products = [
  {
    src: 'https://www.jiomart.com/images/category/17/thumb/dals-pulses-20200714.png',
    name: 'Dals & Pulses',
  },
  {
    src: 'https://www.jiomart.com/images/category/14/thumb/0-14.png',
    name: 'Atta, Flours & Sooji',
  },

  {
    name: 'Edible Oils',
    src: 'https://www.jiomart.com/images/category/18/thumb/0-18.png',
  },
  {
    name: 'Salt, Sugar & Jaggery',
    src: 'https://www.jiomart.com/images/category/20/thumb/0-20.png',
  },
  {
    name: 'Bath & Hand Wash',
    src: 'https://www.jiomart.com/images/category/119/thumb/bath-hand-wash-20200714.png',
  },
  {
    name: 'Toothpaste',
    src: 'https://www.jiomart.com/images/category/7/thumb/toothpaste-20200520.png',
  },
  {
    name: 'Noodle, Pasta, Vermicelli',
    src: 'https://www.jiomart.com/images/category/191/thumb/noodle-pasta-vermicelli-20200603.png',
  },
  {
    name: 'Biscuits & Cookies',
    src: 'https://www.jiomart.com/images/category/44/thumb/0-44.png',
  },
];

export function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Helmet>
        <title>Get Your Grocery And Daily Needs From Hutty.</title>
        <meta
          name="description"
          content="Get Your Grocery And Daily Needs From Hutty."
        />
      </Helmet>
      <Header />
      <div>
        <Typography variant="h6" align="center" className={classes.titleText}>
          {'Your daily essentials we provide'}
        </Typography>
        <div className={classes.productImageDiv}>
          {products.map(item => {
            return (
              <div key={item.name} className={classes.productImageHolder}>
                <div className={classes.imageDiv}>
                  <img className={classes.productImage} src={item.src} alt="" />
                  <span className={classes.imageSpan}>{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <img
            src={UnderConstruction}
            className={classes.underConstructionImage}
            alt=""
          />
        </div>
      </div>
    </>
  );
}
