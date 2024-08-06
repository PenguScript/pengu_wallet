local QBCore = exports['qb-core']:GetCoreObject()

local function toggleNuiFrame(shouldShow)
  local PlayerData = QBCore.Functions.GetPlayerData()
  SetNuiFocus(shouldShow, shouldShow)
  SendReactMessage('setVisible', shouldShow)
  SendReactMessage('updateWallet', {cash = PlayerData.money.cash, bank = PlayerData.money.bank})
  print(PlayerData.money.cash)
end

RegisterCommand('show-wallet', function()
  toggleNuiFrame(true)
  debugPrint('Show NUI frame')
end)

RegisterKeyMapping("show-wallet", "Show Wallet", "keyboard", "o")

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  debugPrint('Hide NUI frame')
  cb({})
end)