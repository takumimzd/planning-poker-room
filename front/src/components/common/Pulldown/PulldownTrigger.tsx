import React from 'react'
import styled from 'styled-components'

export type PulldownProps = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps>

export type BaseProps = {
  /**
   * ボタン内に表示する内容
   */
  children?: React.ReactNode
  /**
   * ボタン内の先頭に表示する内容。
   * 基本、アイコンを表示するために用いる。
   */
  prefix?: React.ReactNode
  /**
   * ボタン内の末尾に表示する内容。
   * 基本、アイコンを表示するために用いる。
   */
  suffix?: React.ReactNode
  /**
   * numberの時はpx
   * stringの時は単位を指定 e.g. '100%'
   * default 184px
   */
  width?: number | string
}

export const PulldownTrigger = ({
  children,
  prefix,
  suffix,
  width = 184,
  ...props
}: PulldownProps) => (
  <Button width={width} {...props}>
    {prefix && <Prefix>{prefix}</Prefix>}
    {children}
    {suffix && <Suffix>{suffix}</Suffix>}
  </Button>
)

const Button = styled.button<{ width: string | number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 8px;
  background-color: white;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
`

const Prefix = styled.span`
  margin-right: 8px;
`

const Suffix = styled.span`
  margin-left: 16px;
`
