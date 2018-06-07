sub vcl_recv {
  if (req.url ~ "^.*(path/to/not/cache).*") {
    return (pass);
  }else {
    unset req.http.cookie;
  }



}
