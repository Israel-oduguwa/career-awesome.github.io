import React from 'react'
import {
  usePopupState,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import Menu from 'material-ui-popup-state/HoverMenu'
import MenuItem from '@material-ui/core/MenuItem'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from "@material-ui/core/Button";
export default function PayFilter(props) {
   const popupState = usePopupState({ variant: 'popover', popupId: 'demoMenu' })
   const { state, handleChange } = props;
  return (
    <React.Fragment>
      <Button variant="contained" {...bindHover(popupState)}>
        Hover to open Menu
      </Button>
      <Menu
        {...bindMenu(popupState)}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
       <FormControl component="fieldset">
      <FormLabel component="legend">Experience</FormLabel>
      <RadioGroup aria-label="Experience" name="experienceFilter" value={state.experienceFilter} onChange={handleChange}>
      <FormControlLabel value="None" control={<Radio />} label="None" />
      <FormControlLabel value="Less Than A Year" control={<Radio />} label="Less Than A Year" />
        <FormControlLabel value="1 Year" control={<Radio />} label="1 Year" />
        <FormControlLabel value="2 Year" control={<Radio />} label="2 Years " />
        <FormControlLabel value="3 Years" control={<Radio />} label="3 Years" />
        <FormControlLabel value="4 Years" control={<Radio />} label="4 Years" />
        <FormControlLabel value="5 Years" control={<Radio />} label="5 Years" />
        <FormControlLabel value="More Than 5 Years" control={<Radio />} label="More Than 5 Years" />
      </RadioGroup>
    </FormControl>
      </Menu>
    </React.Fragment>  )
}