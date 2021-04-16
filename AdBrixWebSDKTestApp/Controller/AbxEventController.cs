using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Threading.Tasks;
using Microsoft.JSInterop;

namespace AdBrixWebSDKTestApp.Controller
{
    public class AbxEventController
    {
        private static IJSRuntime Js { get; set; }
        
        private static List<string> ChannelName()
        {
            List<string> _channelName = new List<string>();
            _channelName.Add("Kakao");
            _channelName.Add("Naver");
            _channelName.Add("Line");
            _channelName.Add("Google");
            _channelName.Add("Facebook");
            _channelName.Add("Twitter");
            _channelName.Add("whatsApp");
            _channelName.Add("QQ");
            _channelName.Add("WeChat");
            _channelName.Add("UserID");
            _channelName.Add("ETC");
            _channelName.Add("SkTid");
            _channelName.Add("AppleId");

            return _channelName;
        }
        
        public static void AbxLogin(string loginId)
        {
            if (loginId != null)
            {
                Js.InvokeVoidAsync("adbrix.login", loginId);
                
            }
            else
            {
                Debug.WriteLine("Login Id is not Available");
            }

        }

        public static void UserProperty(Dictionary<string,Object> userProperty)
        {
            foreach (KeyValuePair<string,Object> items in userProperty)
            {
                Js.InvokeVoidAsync("adbrix.userProperty.addOrUpdate", items.Key, items.Value);

            }
        }

        public static void SignUp(string SignChannelName)
        {
            if (ChannelName().Contains(SignChannelName))
            {
                Js.InvokeVoidAsync("adbrix.common.signUp", SignChannelName);

            } else
            {
                Debug.WriteLine("This Channel not Available");
            }
            
        }

        public static void UserInvite(string InviteChannelName, string LoginId)
        {
            if (ChannelName().Contains(InviteChannelName))
            {
                Js.InvokeVoidAsync("adbrix.common.invite", InviteChannelName, LoginId);

            } else
            {
                Debug.WriteLine("This Channel not Available");
            }
            
        }

        public static void CustomEvent(string EventName, Dictionary<string, Object> eventAttr)
        {
            Js.InvokeVoidAsync("adbrix.event.send", EventName, eventAttr);
        }

        public static void UseCredit(int CreditAmmount)
        {
            if (CreditAmmount != 0)
            {
                Js.InvokeVoidAsync("adbrix.common.useCredit", CreditAmmount);
            }
            else
            {
                Debug.WriteLine("No Creadit has been used");
            }
        }

        public static void Logout()
        {
            Js.InvokeVoidAsync("adbrix.logout");
        }

        public static async Task GetUserID()
        {
            string CurrentUserID = await Js.InvokeAsync<string>("adbrix.getUserId");

            if (CurrentUserID != null)
            {
                Debug.WriteLine("UserID :::::::::" + CurrentUserID);
                
            }
            else
            {
                Debug.WriteLine("No UserID");
            }
        }

        public static async Task GetUserInfo()
        {
            object CurrentUserInfo = await Js.InvokeAsync<object>("adbrix.userProperty.getAll");

            if (CurrentUserInfo != null)
            {
                Debug.WriteLine("currentUserInfo :::::::::" + CurrentUserInfo.ToString());

            }
        }

        public static async Task GetUserPropertyKeyValue(string UserPropertyKey)
        {
            object getUserPropertyValue =
                await Js.InvokeAsync<object>("adbrix.userProperty.get", UserPropertyKey);

            Debug.WriteLine("currentUserPropertyInfo :::::::::" + getUserPropertyValue.ToString());
        }
    }
}