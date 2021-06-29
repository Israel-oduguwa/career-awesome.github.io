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
import {FcTimeline} from "react-icons/fc";
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
export default function SalaryFilter(props) { 
	const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
	const { salaryFilter, handleChange } = props; 
  return (
    <React.Fragment>
      <Button style={{textTransform:"inherit"}} startIcon={<FcTimeline/>} color="primary"  {...bindHover(popupState)}>
        Salary Duration
      </Button>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
       <div className="row" style={{padding:"10px 100px 10px 20px"}}>
        <div className="col-md-12">
        <FormControl component="fieldset">
                  <Typography color="primary" variant="subtitle1">Salary Duration</Typography>
                  <RadioGroup aria-label="salary" name="salaryFilter" value={salaryFilter} onChange={handleChange}>
                  <FormControlLabel className="SF" value="All" control={<Radio color="primary" />} label="All" />
                  <FormControlLabel  className="SF" value="year" control={<Radio color="primary" />} label="Yearly" />
                  <FormControlLabel className="SF" value="week" control={<Radio color="primary" />} label="Weekly" />
                  <FormControlLabel className="SF" value="month" control={<Radio color="primary" />} label="Monthly" />
                  <FormControlLabel className="SF" value="day" control={<Radio color="primary" />} label="Daily" />
                  <FormControlLabel className="SF" value="hour" control={<Radio color="primary" />} label="Hourly" />
                  </RadioGroup>
        </FormControl>
        </div>
       </div>
      </Menu>
    </React.Fragment>  )
}
