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
   * 選択されている要素のフラグ
   */
  selected?: boolean
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
   * default 200px
   */
  width?: number | string
}

export const PulldownItem = ({
  children,
  selected,
  prefix,
  suffix,
  width = 160,
  ...props
}: PulldownProps) => (
  <Button {...props} width={width}>
    <Prefix selected={selected}>{prefix}</Prefix>
    {children}
    {suffix && <Suffix>{suffix}</Suffix>}
  </Button>
)

const ResetButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
`

const Button = styled(ResetButton)<{ selected?: boolean; width: number | string }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  width: ${({ width }) => (typeof width === 'number' ? `${width}px` : width)};
  border-bottom: solid 1px black;
  background-color: white;
  transition: all 0.2s ease;
  &:hover {
    background-color: white;
  }
`

export const Prefix = styled.span<{ selected?: boolean }>`
  margin-right: 4px;
  visibility: ${({ selected }) => (selected ? 'visible' : 'hidden')};
`

export const Suffix = styled.span`
  margin-left: 4px;
`
