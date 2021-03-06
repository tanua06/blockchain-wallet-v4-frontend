import { Field, reduxForm } from 'redux-form'
import React from 'react'

import { SelectBoxTheme } from 'components/Form'
import { SettingSelectBoxWrapper } from 'components/Setting'

const Settings = () => (
  <SettingSelectBoxWrapper>
    <Field name='theme' component={SelectBoxTheme} />
  </SettingSelectBoxWrapper>
)

export default reduxForm({ form: 'settingTheme' })(Settings)
