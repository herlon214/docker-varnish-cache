var config = {
  servers: [{
    name: "Varnish",
    host: location.hostname,
    port: 6884,
    user: "admin",
    pass: "admin"
  }],
  groups: [],
  update_freq: 2000,
  max_points: 100,
  default_log_fetch: 10000,
  default_log_display: 100,
  show_bans_page: true,
  show_manage_server_page: true,
  show_vcl_page: true,
  show_stats_page: true,
  show_params_page: true,
  show_logs_page: true,
  show_restart_varnish_btn: true
};
