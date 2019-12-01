import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import GridItem from "../../components/content/Grid/GridItem.js";
import GridContainer from "../../components/content/Grid/GridContainer.js";
import Card from "../../components/content/Card/Card.js";
import CardBody from "../../components/content/Card/CardBody";
import CardAvatar from "../../components/content/Card/CardAvatar";
import CustomInput from "../../components/content/CustomInput/CustomInput.js";
import Button from "../../components/content/CustomButtons/Button.js";
import avatar from "../../assets/img/faces/marc.jpg";

import styles from "../../assets/jss/material-dashboard-react/views/dashboardStyle.js";
import ChildList from '../ChildList/ChildList.jsx';

const useStyles = makeStyles(theme => ({
  ...styles,
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function StaffDetails() {
  const classes = useStyles();

  return (
    <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
        <Card profile>
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>      
            <form className={classes.form} noValidate>
              <GridContainer>
                <GridItem xs={12} sm={12} md={5}>
                  <CustomInput
                    labelText="Company (disabled)"
                    id="company-disabled"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      disabled: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                  <CustomInput
                    labelText="Username"
                    id="username"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Email address"
                    id="email-address"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="first-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Last Name"
                    id="last-name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="City"
                    id="city"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Country"
                    id="country"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <CustomInput
                    labelText="Postal Code"
                    id="postal-code"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem>
                  <Button color="primary">Update Profile</Button>
                </GridItem>
              </GridContainer>                                    
            </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <ChildList />
        </GridItem>
      </GridContainer>
  );
}