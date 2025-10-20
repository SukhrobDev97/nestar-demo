import React from "react"
import { Stack } from "@mui/material"

const TopAgentCard = () => {
  return (
    <Stack className={"top-agent-card"}>
      <img src="/img/profile/girl.svg" alt="" />
      <strong>Makler</strong>
      <span>Agent</span>
    </Stack>
  )
}

export default TopAgentCard