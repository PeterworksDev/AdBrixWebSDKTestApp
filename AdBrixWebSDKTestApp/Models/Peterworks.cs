using System.Text.Json.Serialization;

namespace AdBrixWebSDKTestApp.Models
{
    public class Peterworks
    {
        public string Id { get; set; }

        [JsonPropertyName("appkey")] public string Appkey { get; set; }

        [JsonPropertyName("postbackType")] public string PostbackType { get; set; }

        [JsonPropertyName("adid")] public string Adid { get; set; }

        [JsonPropertyName("idfv")] public string Idfv { get; set; }

        [JsonPropertyName("attrType")] public string AttrType { get; set; }

        [JsonPropertyName("eventName")] public string EventName { get; set; }

        [JsonPropertyName("eventTime")] public long EventTime { get; set; }

        [JsonPropertyName("serverTime")] public long ServerTime { get; set; }

        [JsonPropertyName("platform")] public string Platform { get; set; }

        [JsonPropertyName("carrier")] public string Carrier { get; set; }

        [JsonPropertyName("deviceModel")] public string DeviceModel { get; set; }

        [JsonPropertyName("language")] public string Language { get; set; }

        [JsonPropertyName("country")] public string Country { get; set; }

        [JsonPropertyName("peterParameter")] public string PeterParameter { get; set; }

        [JsonPropertyName("logId")] public string Log_id { get; set; }
    }
}