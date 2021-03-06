import { Button, Image, Link, Text } from 'blockchain-info-components'
import { FormattedMessage } from 'react-intl'
import { spacing } from 'services/StyleService'
import React from 'react'
import recoveryPdf from './recovery_phrase.pdf'
import styled from 'styled-components'

const PrintContainer = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 20px 0;
  width: 65%;
  flex-direction: column;
  button {
    margin-top: 20px;
  }
  @media (min-width: 992px) {
    width: 65%;
    flex-direction: row;
    button {
      margin-top: 0;
    }
    div:first-of-type {
      padding-right: 30px;
    }
  }
`
const FirstStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (min-width: 480px) {
    width: 118%;
  }
`
const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  & > :first-child {
    margin-right: 14px;
  }
  a {
    margin-top: 15px;
  }
  @media (min-width: 992px) {
    margin-top: 30px;
  }
`

const FirstStep = props => {
  const { nextStep } = props

  return (
    <FirstStepContainer>
      <PrintContainer>
        <Text size='12px' weight={500}>
          <FormattedMessage
            id='modals.recoveryphrase.firststep.explain4'
            defaultMessage='We created a printable backup sheet to give you a place to write down your 12 word phrase and keep it safe. Please print the blank sheet (or grab a piece of paper) and move on to the next step.'
          />
        </Text>
        <Link
          href={recoveryPdf}
          download='recovery_phrase.pdf'
          data-e2e='downloadRecoveryPhraseLink'
        >
          <Button nature='empty'>
            <Image
              name='printer'
              height='20px'
              width='20px'
              style={spacing('mr-5')}
            />
            <FormattedMessage
              id='modals.recoveryphrase.firststep.print'
              defaultMessage='Print Backup Sheet'
            />
          </Button>
        </Link>
      </PrintContainer>
      <Buttons>
        <Button
          nature='empty'
          onClick={props.handleClose}
          data-e2e='backupFundsCancelButton'
        >
          <FormattedMessage
            id='scenes.security.2fa.cancel'
            defaultMessage='Cancel'
          />
        </Button>
        <Button
          nature='primary'
          onClick={nextStep}
          data-e2e='backupFundsProceedButton'
        >
          <FormattedMessage
            id='modals.recoveryphrase.firststep.backup'
            defaultMessage='Backup Funds'
          />
        </Button>
      </Buttons>
    </FirstStepContainer>
  )
}

export default FirstStep
