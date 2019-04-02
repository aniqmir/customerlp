import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: 'cover',
  },
};

const gridStyle = {
    textAlign:"center",
    position: 'absolute', 
    left: '50%', 
    top: '50%',
    transform: 'translate(-50%, -50%)',
}

const userTypes = [
    {
      value: 'customer',
      label: 'Customer',
    },
    {
      value: 'partner',
      label: 'Partner',
    },
  ];

class ImgMediaCard extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            email:'',
            password:'',
            userTypes:'Customer'
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    

    render() {
    const { classes } = this.props;
    return (
    <Grid container spacing={0} justify="center" alignContent="center" alignItems="center" direction="column" style={gridStyle}>
    <Grid item xs={12}>
    <Card className={classes.card}>
        <CardContent>
        <TextField
          id="outlined-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          value={this.state.email}
          onChange={this.handleChange('email')}
          fullWidth={true}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="outlined"
          value={this.state.password}
          onChange={this.handleChange('password')}
          fullWidth={true}
        />
        <TextField
          id="outlined-select-currency-native"
          select
          label="User Type"
          className={classes.textField}
          value={this.state.userTypes}
          onChange={this.handleChange('userTypes')}
          fullWidth={true}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
        //   helperText="Select your User Type"
          margin="normal"
          variant="outlined"
        >
          {userTypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </Grid>
    </Grid>
  );
}
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImgMediaCard);
