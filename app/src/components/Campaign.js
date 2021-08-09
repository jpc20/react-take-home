import { Grid, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    margin: '1rem',

  },
  img: {
      width: "3.5rem",
      borderRadius: "1rem",
  },
  title: {
      textAlign: "left",
  },
  name: {
    fontWeight: "bold",
  },
  perInstall: {
      color: "green",
      lineHeight: "1rem",
  }
}));

const Campaign = (campaign) => {
  const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item>
                    <img className={classes.img} src={campaign.campaign.campaign_icon_url} alt="campaign-img" />
                </Grid>
                <Grid item xs={6} className={classes.title}>
                    <Typography variant="body1" className={classes.name}>
                        {campaign.campaign.campaign_name}
                    </Typography>
                    <Typography variant="subtitle1" className={classes.perInstall}>
                        <span style={{fontWeight: "bold"}}>{campaign.campaign.pay_per_install}</span> per install
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default Campaign
