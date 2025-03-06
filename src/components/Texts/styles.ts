import styled from "styled-components";

interface TitleProps {
  size: "L" | "M" | "S"
}

export const Title = styled.h1<TitleProps>`
  color: ${props => props.size === "L" ? props.theme["title"] : props.theme["subtitle"]};
  line-height: 130%;
  font-size: ${props => props.size == "L" ? "1.5rem" : "1.25rem"};
  font-weight: 700;
`

interface TextProps {
  size: "M" | "S"
}

export const Subtitle = styled.h1<TextProps>`
  color: ${props => props.theme["subtitle"]};
  line-height: 130%;
  font-size: ${props => props.size == "M" ? "1rem" : "0.85rem"};
  font-weight: 700;
  `

export const Text = styled.span<TextProps>`
  font-size: ${props => props.size == "M" ? "1rem" : "0.85rem"};
  line-height: 160%;
  color: ${props => props.theme["text"]};
`

export const Label = styled.span<TextProps>`
  font-size: ${props => props.size == "M" ? "1rem" : "0.85rem"};
  line-height: 160%;
  color: ${props => props.theme["label"]};
`

export const Span = styled.span<TextProps>`
  font-size: ${props => props.size == "M" ? "1rem" : "0.85rem"};
  line-height: 160%;
  color: ${props => props.theme["span"]};
`

export const Link = styled.span`
  font-size: 0.75rem;
  line-height: 160%;
  font-weight: 700;
  text-transform: uppercase;
  color: ${props => props.theme["blue"]};
`