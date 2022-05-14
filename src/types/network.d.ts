type NetworkName = string
type CandleNetworks = Record<NetworkName, CandleNetwork>

interface CandleNetwork {
  name: NetworkName
  chainID: string
  lcd: string
}

type CustomNetworks = Record<NetworkName, CustomNetwork>

interface CustomNetwork extends CandleNetwork {
  preconfigure?: boolean
}
