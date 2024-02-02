'use client'

import { useState } from 'react'
import { CallBackProps, STATUS, Step } from 'react-joyride'

import dynamic from 'next/dynamic'

const JoyRideNoSSR = dynamic(() => import('react-joyride'), { ssr: false })

const UserGuide = () => {
  const [run, setRun] = useState<boolean>(false)

  const steps: Step[] = [
    {
      target: '.header-guide',
      title: 'Esse é meu header',
      content: 'olha so',
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true
      },
      spotlightPadding: 20
    },
    {
      target: '.title-guide',
      title: 'Essa é o titulo do meu guia',
      content: 'xD',
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true
      },
      spotlightPadding: 10
    },
    {
      target: '.button-guide',
      title: 'Essa é o botão que inicia o guia',
      content: 'xD',
      disableBeacon: true,
      floaterProps: {
        disableAnimation: true
      },
      spotlightPadding: 10
    }
  ]

  const locale = {
    back: 'Voltar',
    close: 'Fechar',
    last: 'Último',
    next: 'Próximo',
    skip: 'Pular',
    open: 'Abrir'
  }

  const handleClickStart = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    setRun(true)
  }

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (finishedStatuses.includes(status)) {
      setRun(false)
    }
  }

  return (
    <>
      <main className="w-full bg-white p-4">
        <h1 className="title-guide mb-4 text-3xl font-semibold">
          User guide - React Joyride
        </h1>
        <button
          className="button-guide rounded-lg border-2 border-solid border-slate-700 px-4 py-1 uppercase"
          onClick={handleClickStart}
        >
          start
        </button>
      </main>
      <JoyRideNoSSR
        callback={handleJoyrideCallback}
        steps={steps}
        locale={locale}
        run={run}
        continuous
        scrollToFirstStep
        disableCloseOnEsc
        disableOverlayClose
        hideBackButton={false}
        hideCloseButton={false}
        showProgress
        showSkipButton
      />
    </>
  )
}

export default UserGuide
