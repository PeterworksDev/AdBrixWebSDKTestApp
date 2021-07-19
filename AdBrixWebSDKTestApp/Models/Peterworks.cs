using Newtonsoft.Json;

namespace AdBrixWebSDKTestApp.Models
{
    public class Peterworks
    {
        [JsonProperty("id")] public string Id { get; set; }

        [JsonProperty("appkey")] public string? Appkey { get; set; }

        [JsonProperty("postback_type")] public string PostbackType { get; set; }

        [JsonProperty("adid")] public string Adid { get; set; }

        [JsonProperty("idfv")] public string Idfv { get; set; }

        [JsonProperty("attrType")] public string AttrType { get; set; }

        [JsonProperty("event_name")] public string EventName { get; set; }

        [JsonProperty("event_time")] public long EventTime { get; set; }

        [JsonProperty("server_time")] public long ServerTime { get; set; }

        [JsonProperty("platform")] public string Platform { get; set; }

        [JsonProperty("carrier")] public string Carrier { get; set; }

        [JsonProperty("device_model")] public string DeviceModel { get; set; }

        [JsonProperty("language")] public string Language { get; set; }

        [JsonProperty("country")] public string Country { get; set; }

        [JsonProperty("peter_parameter")] public string PeterParameter { get; set; }

        [JsonProperty("works_parameter")] public string WorksParameter { get; set; }
    }
}