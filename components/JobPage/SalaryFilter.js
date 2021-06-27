import React from 'react';
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import Menu from 'material-ui-popup-state/HoverMenu';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from "@material-ui/core/Typography";
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
export default function SalaryFilter(props) { 
	const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
	// const { state, handleChange } = props; 
  return (
    <React.Fragment>
      <Button style={{textTransform:"inherit"}} startIcon={<WorkOutlineIcon />} color="primary"  {...bindHover(popupState)}>
        Salary Duration
      </Button>
      // <Menu
      //   {...bindMenu(popupState)}
      //   getContentAnchorEl={null}
      //   anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      //   transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      // >
      //  <div className="row" style={{padding:"20px 20px"}}>
      //   <div className="col-md-12">
      //   <FormControl component="fieldset">
      //             <Typography color="primary" variant="subtitle1">Salary Time</Typography>
      //             <RadioGroup aria-label="salary" name="salaryFilter" value={this.state.salaryFilter} onChange={this.handleChange}>
      //             <FormControlLabel className={classes.conLabel} value="All" control={<Radio color="default" />} label="All" />
      //             <FormControlLabel  className={classes.conLabel} value="year" control={<Radio color="default" />} label="Yearly" />
      //             <FormControlLabel className={classes.conLabel} value="week" control={<Radio color="default" />} label="Weekly" />
      //             <FormControlLabel className={classes.conLabel} value="month" control={<Radio color="default" />} label="Monthly" />
      //             <FormControlLabel className={classes.conLabel} value="day" control={<Radio color="default" />} label="Daily" />
      //             <FormControlLabel className={classes.conLabel} value="hour" control={<Radio color="default" />} label="Hourly" />
      //             </RadioGroup>
      //   </FormControl>
      //   </div>
      //  </div>
      // </Menu>
    </React.Fragment>  )
}
