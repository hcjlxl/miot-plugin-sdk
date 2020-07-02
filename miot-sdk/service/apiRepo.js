const API_REPO = {
  // 所有 smarthome api
  '/v2/irdevice/controllers': {},
  '/v2/ircode/categories': {},
  '/v2/ircode/area/area_id': {},
  '/v2/ircode/area/lineups': {},
  '/v2/ircode/area/province/cities': {},
  '/v2/ircode/area/provinces/china': {},
  '/v2/ircode/area/city/areas': {},
  '/v2/ircode/iptv/brands': {},
  '/v2/ircode/category/brands': {},
  '/v2/irdevice/controller/add': {},
  '/v2/irdevice/controller/keys/set': {},
  '/v2/irdevice/send_key': {},
  '/v2/irdevice/controller/del': {},
  '/v2/irdevice/controller/update': {},
  '/v2/irdevice/controller/keys': {},
  '/v2/irdevice/controller/key/update': {},
  '/v2/irdevice/controller/key/del': {},
  '/v2/irdevice/controller/key/click': {},
  '/v2/irdevice/controller/functions': {},
  '/scene/edit': {},
  '/scene/get': {},
  '/scene/start': {},
  '/scene/delete': {},
  '/scene/list': {},
  '/scene/history': {},
  '/scene/tplv2': {},
  '/share/bluetoothkeyshare': {},
  '/home/profile': {},
  '/device/blelockbindinfo': {},
  '/home/profiles': {},
  '/location/set': {},
  '/location/weather': {},
  '/home/checkversion': {},
  '/location/area_prop_info': {},
  '/home/multi_checkversion': {},
  '/home/latest_version': {},
  '/v2/device/latest_ver': {},
  '/device/event': {},
  '/v2/device/set_extra_data': {},
  '/v2/device/range_get_extra_data': {},
  '/v2/device/del_extra_data': {},
  '/v2/device/get_extra_data': {},
  '/v2/user/statistics': {},
  '/voicectrl/ai_devs': {},
  '/voicectrl/xiaoice_skills': {},
  '/voicectrl/get_skills': {},
  '/v2/voicectrl/ai_flash_briefing': {},
  '/v2/api/aivs': {},
  '/device/getsetting': {},
  '/v2/device/getsettingv2': {},
  '/device/setsetting': {},
  '/device/delsetting': {},
  '/user/set_user_device_data': {},
  '/user/get_user_device_data': {},
  '/user/del_user_device_data': {},
  '/v2/user/get_user_device_log': {},
  '/user/get_user_coll': {},
  '/user/set_user_coll': {},
  '/user/edit_user_coll': {},
  '/user/del_user_coll': {},
  '/home/getmapfileurl': {},
  '/home/getrobomapurl': {},
  '/user/del_user_map': {},
  '/home/device_list': {},
  '/service/getappconfig': {},
  '/service/getappconfigv2': {},
  '/home/getcountry': {},
  '/v2/device/batch_set_props': {},
  '/v2/device/set_props': {},
  '/device/batchdevicedatas': {},
  '/device/getThirdConfig': {},
  '/v2/third/synccall': {},
  '/third/api': {},
  '/third/api_result': {},
  '/user/get_device_auth': {},
  '/v2/home/get_interim_file_url': {},
  '/home/getfileurl': {},
  '/v2/user/getuserdevicedatatab': {},
  '/v2/home/range_get_open_config': {},
  '/v2/nfckey/bind_nfc_card': {},
  '/v2/nfckey/get_nfc_card': {},
  '/yaokan/insertunmodel': {},
  '/scene/idfy_get': {},
  '/scene/idfy_edit': {},
  '/v2/user/create_member': {},
  '/v2/user/update_member': {},
  '/v2/user/remove_member': {},
  '/v2/user/get_member': {},
  '/user/setpdata': {},
  '/user/getpdata': {},
  '/v2/user/get_device_data_raw': {},
  '/v2/nfckey/create_se_session': {},
  '/v2/nfckey/replace_se_isdkey': {},
  '/v2/nfckey/reset_lock_primarykey': {},
  '/v2/nfckey/handle_se_response': {},
  '/v2/device/bledevice_info': {},
  '/miotspec/prop/get': {},
  '/miotspec/prop/set': {},
  '/miotspec/action': {},
  '/user/get_user_config': {},
  '/user/get_third_user_config': {},
  '/user/set_user_config': {},
  '/user/set_third_user_config': {},
  '/v2/device/multi_button_template': {},
  '/device/deviceinfo': {},
  '/v2/device/ble_event': {},
  '/share/get_share_user': {},
  '/v2/aftersale/validate': {},
  '/v2/aftersale/create': {},
  '/v2/aftersale/list': {},
  '/v2/aftersale/detail': {},
  // 摄像机API
  '/wx/app/v1/get/pushSwitch': {},
  '/wx/app/v1/put/pushSwitch': {},
  '/miot/camera/app/v1/get/alarmSwitch': {},
  '/miot/camera/app/v1/put/motionDetectionSwitch': {},
  '/miot/camera/app/v1/put/sensitive': {},
  '/miot/camera/app/v1/put/pushSwitch': {},
  '/miot/camera/app/v1/put/areaChangePushSwitch': {},
  '/miot/camera/app/v1/put/pedestrianDetectionPushSwitch': {},
  '/miot/camera/app/v1/put/babyCryPushSwitch': {},
  '/miot/camera/app/v1/put/aiPushSwitch': {},
  '/miot/camera/app/v1/vip/status': {},
  '/common/app/get/eventlist': {},
  '/common/app/v2/delete/files': {},
  '/common/app/markRead': {},
  '/common/device/vip/status': {},
  '/common/app/vip/status': {},
  '/miot/camera/app/v1/get/fileIdMetas': {},
  '/miot/camera/app/v1/get/figures': {},
  '/miot/camera/app/v1/get/figureByName': {},
  '/miot/camera/app/v1/add/figure': {},
  '/miot/camera/app/v1/add/face': {},
  '/common/app/m3u8': {},
  '/common/app/v1/img': {},
  '/miot/camera/app/v1/put/faceSwitch': {},
  '/miot/camera/app/v1/put/babyCrySwitch': {},
  '/miot/camera/app/v2/get/alarmSwitch': {},
  '/miot/camera/app/v2/put/motionDetectionSwitch': {},
  '/v2/public/get_weekday_info': {},
  '/v2/device/blt_get_beaconkey': {},
  '/v2/device/set_alarm_info': {},
  '/v2/device/get_alarm_info': {},
  '/v2/device/del_alarm_info': {},
  '/miot/camera/app/v1/get/allDetectionSwitch': {},
  '/miot/camera/app/v1/put/genericEventPushSwitch': {},
  '/user/del_user_device_data_batch': {},
  '/miot/camera/app/v1/tags': {},
  '/miot/camera/app/v1/feedback': {},
  '/miot/camera/app/v1/alarm/playlist/limit': {},
  '/miot/camera/app/v1/alarm/delete': {},
  '/miot/camera/app/v1/alarm/videoStoreId': {},
  '/user/send_user_opt_notify': {},
  '/home/genfilepresignedurl': {},
  '/device/devicepass': {},
  // 保险箱门锁类 报警电话和胁迫指纹的api权限
  '/v2/device/set_break_lock_alarm_info': {},
  '/v2/device/get_break_lock_alarm_info': {},
  '/v2/device/set_hijack_alarm_info': {},
  '/v2/device/get_hijack_alarm_info': {}
};
export default API_REPO;