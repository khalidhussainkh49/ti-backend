using Microsoft.AspNetCore.SignalR;

namespace CIU.SignalR;

public class IntelligenceHub : Hub
{
    public async Task BroadcastAlert(
        string title,
        string message)
    {
        await Clients.All.SendAsync(
            "ReceiveAlert",
            title,
            message
        );
    }
}