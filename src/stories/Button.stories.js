import React from 'react';
import Button from 'components/Button'
import {FaRegBookmark} from 'react-icons/fa'

export default {
  title: 'Button',
  component: Button,
  argTypes:{
    theme:{
      options: ['button-primary', 'button-secondary'],
      control: {type: 'radio'}
    },
    disable:{
      control: 'boolean'
    },
    caret:{
      control: 'boolean'
    }
  }
};

const ButtonTemplate = args => <Button {...args} />

export const Primary_Button = ButtonTemplate.bind({})
Primary_Button.args = {text:'Button', theme:"button-primary",disable:false,caret:false}

export const Primary_Button_with_Icon = ButtonTemplate.bind({})
Primary_Button_with_Icon.args = {text:'Button', theme:"button-primary", icon:<FaRegBookmark className='padding-right'/>}

export const Primary_Button_with_Caret = ButtonTemplate.bind({})
Primary_Button_with_Caret.args = {text:'Button', theme:"button-primary", caret:true}

export const Primary_Button_Disabled = ButtonTemplate.bind({})
Primary_Button_Disabled.args = {text:'Button', theme:"button-primary", disable:true}

export const Secondary_Button = ButtonTemplate.bind({})
Secondary_Button.args = {text:'Button', theme:"button-secondary"}

export const Secondary_Button_with_Icon = ButtonTemplate.bind({})
Secondary_Button_with_Icon.args = {text:'Button', theme:"button-secondary", icon:<FaRegBookmark className='padding-right'/>}

export const Secondary_Button_with_Caret = ButtonTemplate.bind({})
Secondary_Button_with_Caret.args = {text:'Button', theme:"button-secondary", caret:true}

export const Secondary_Button_Disabled = ButtonTemplate.bind({})
Secondary_Button_Disabled.args = {text:'Button', theme:"button-secondary", disable:true}