(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{140:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return s})),t.d(e,"metadata",(function(){return r})),t.d(e,"rightToc",(function(){return l})),t.d(e,"default",(function(){return d}));var a=t(1),o=t(9),i=(t(0),t(199)),s={id:"configuration",title:"Configuration"},r={id:"version-v1.4/reference/configuration",title:"Configuration",description:"\x3c!-- THIS FILE IS BEING AUTO-GENERATED. DO NOT MODIFY IT AS ALL CHANGES WILL BE OVERWRITTEN.",source:"@site/versioned_docs/version-v1.4/reference/configuration.md",permalink:"/hydra/docs/reference/configuration",editUrl:"https://github.com/docs/hydra/edit/master/docs/versioned_docs/version-v1.4/reference/configuration.md",version:"v1.4",lastUpdatedBy:"hackerman",lastUpdatedAt:1586178985,sidebar:"version-v1.4/docs",previous:{title:"Consuming OAuth 2.0",permalink:"/hydra/docs/integration"},next:{title:"REST API",permalink:"/hydra/docs/reference/api"}},l=[],u={rightToc:l};function d(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"If file ",Object(i.b)("inlineCode",{parentName:"p"},"$HOME/.oathkeeper.yaml")," exists, it will be used as a configuration file\nwhich supports all configuration settings listed below."),Object(i.b)("p",null,"You can load the config file from another source using the\n",Object(i.b)("inlineCode",{parentName:"p"},"-c path/to/config.yaml")," or ",Object(i.b)("inlineCode",{parentName:"p"},"--config path/to/config.yaml")," flag:\n",Object(i.b)("inlineCode",{parentName:"p"},"oathkeeper --config path/to/config.yaml"),"."),Object(i.b)("p",null,"Config files can be formatted as JSON, YAML and TOML. Some configuration values\nsupport reloading without server restart. All configuration values can be set\nusing environment variables, as documented below."),Object(i.b)("p",null,"To find out more about edge cases like setting string array values through\nenvironmental variables head to the\n",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.ory.sh/docs/ecosystem/configuring"}),"Configuring ORY services"),"\nsection."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-yaml"}),'## ORY Hydra Configuration\n#\n\n## log ##\n#\n# Configures the logger\n#\nlog:\n  ## level ##\n  #\n  # Sets the log level.\n  #\n  # Default value: info\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_LEVEL=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_LEVEL=<value>\n  #\n  level: warn\n\n  ## format ##\n  #\n  # Sets the log format.\n  #\n  # Default value: text\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export LOG_FORMAT=<value>\n  # - Windows Command Line (CMD):\n  #    > set LOG_FORMAT=<value>\n  #\n  format: text\n\n## serve ##\n#\n# Controls the configuration for the http(s) daemon(s).\n#\nserve:\n  ## public ##\n  #\n  # Controls the public daemon serving public API endpoints like /oauth2/auth, /oauth2/token, /.well-known/jwks.json\n  #\n  public:\n    ## port ##\n    #\n    # Default value: 4444\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_PORT=<value>\n    #\n    port: 62267\n\n    ## host ##\n    #\n    # The interface or unix socket ORY Hydra should listen and handle public API requests on. Use the prefix "unix:" to specify a path to a unix socket. Leave empty to listen on all interfaces.\n    #\n    # Examples:\n    # - localhost\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_PUBLIC_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_PUBLIC_HOST=<value>\n    #\n    host: localhost\n\n    ## cors ##\n    #\n    # Configures Cross Origin Resource Sharing for public endpoints.\n    #\n    cors:\n      ## enabled ##\n      #\n      # Sets whether CORS is enabled.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ENABLED=<value>\n      #\n      enabled: true\n\n      ## allowed_origins ##\n      #\n      # A list of origins a cross-domain request can be executed from. If the special * value is present in the list, all origins will be allowed. An origin may contain a wildcard (*) to replace 0 or more characters (i.e.: http://*.domain.com). Only one wildcard can be used per origin.\n      #\n      # Default value: *\n      #\n      # Examples:\n      # - - https://example.com\n      #   - https://*.example.com\n      #   - https://*.foo.example.com\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - https://example.com\n        - https://*.example.com\n        - https://*.foo.example.com\n\n      ## allowed_methods ##\n      #\n      # A list of HTTP methods the user agent is allowed to use with cross-domain requests.\n      #\n      # Default value: POST,GET,PUT,PATCH,DELETE\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - HEAD\n        - PATCH\n        - TRACE\n\n      ## allowed_headers ##\n      #\n      # A list of non simple headers the client is allowed to use with cross-domain requests.\n      #\n      # Default value: Authorization,Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - eiusmod commodo adipisicing cupidatat\n        - enim sunt eu culpa sint\n\n      ## exposed_headers ##\n      #\n      # Sets which headers are safe to expose to the API of a CORS API specification.\n      #\n      # Default value: Content-Type\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - eiusmod\n        - ut in pariatur ex\n\n      ## allow_credentials ##\n      #\n      # Sets whether the request can include user credentials like cookies, HTTP authentication or client side SSL certificates.\n      #\n      # Default value: true\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: true\n\n      ## max_age ##\n      #\n      # Sets how long (in seconds) the results of a preflight request can be cached. If set to 0, every request is preceded by a preflight request.\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_MAX_AGE=<value>\n      #\n      max_age: 81416384\n\n      ## debug ##\n      #\n      # Adds additional log output to debug server side CORS issues.\n      #\n      # Default value: false\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_PUBLIC_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_PUBLIC_CORS_DEBUG=<value>\n      #\n      debug: true\n\n  ## admin ##\n  #\n  admin:\n    ## port ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_PORT=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_PORT=<value>\n    #\n    port: 6721\n\n    ## host ##\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_ADMIN_HOST=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_ADMIN_HOST=<value>\n    #\n    host: localhost\n\n    ## cors ##\n    #\n    cors:\n      ## enabled ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ENABLED=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ENABLED=<value>\n      #\n      enabled: false\n\n      ## allowed_origins ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOWED_ORIGINS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOWED_ORIGINS=<value>\n      #\n      allowed_origins:\n        - \'*\'\n\n      ## allowed_methods ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOWED_METHODS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOWED_METHODS=<value>\n      #\n      allowed_methods:\n        - OPTIONS\n        - CONNECT\n        - OPTIONS\n        - GET\n        - POST\n\n      ## allowed_headers ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOWED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOWED_HEADERS=<value>\n      #\n      allowed_headers:\n        - dolor\n        - magna cillum id sunt reprehenderit\n        - laboris labore exercitation velit\n        - dolore ea aliquip amet consectetur\n        - fugiat\n\n      ## exposed_headers ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_EXPOSED_HEADERS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_EXPOSED_HEADERS=<value>\n      #\n      exposed_headers:\n        - ex in\n        - Ut ex\n\n      ## allow_credentials ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_ALLOW_CREDENTIALS=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_ALLOW_CREDENTIALS=<value>\n      #\n      allow_credentials: true\n\n      ## max_age ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_MAX_AGE=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_MAX_AGE=<value>\n      #\n      max_age: 29553523\n\n      ## debug ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_ADMIN_CORS_DEBUG=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_ADMIN_CORS_DEBUG=<value>\n      #\n      debug: true\n\n  ## tls ##\n  #\n  # Configures HTTPS (HTTP over TLS). If configured, the server automatically supports HTTP/2.\n  #\n  tls:\n    ## key ##\n    #\n    # Configures the private key (pem encoded).\n    #\n    key:\n      ## base64 ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_KEY_BASE64=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_KEY_BASE64=<value>\n      #\n      base64: 0RY1SAWsmLS0tLS1CRUdJTiBDRVJUSUZJQ0FURS0tLS0tXG5NSUlEWlRDQ0FrMmdBd0lCQWdJRVY1eE90REFOQmdr...\n\n    ## cert ##\n    #\n    # Configures the private key (pem encoded).\n    #\n    cert:\n      ## path ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export SERVE_TLS_CERT_PATH=<value>\n      # - Windows Command Line (CMD):\n      #    > set SERVE_TLS_CERT_PATH=<value>\n      #\n      path: /path/to/file.pem\n\n    ## allow_termination_from ##\n    #\n    # Whitelist one or multiple CIDR address ranges and allow them to terminate TLS connections. Be aware that the X-Forwarded-Proto header must be set and must never be modifiable by anyone but your proxy / gateway / load balancer. Supports ipv4 and ipv6. Hydra serves http instead of https when this option is set.\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_TLS_ALLOW_TERMINATION_FROM=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_TLS_ALLOW_TERMINATION_FROM=<value>\n    #\n    allow_termination_from:\n      - 127.0.0.1/32\n      - 127.0.0.1/32\n      - 127.0.0.1/32\n      - 127.0.0.1/32\n\n  ## cookies ##\n  #\n  cookies:\n    ## same_site_mode ##\n    #\n    # Specify the SameSite mode that cookies should be sent with.\n    #\n    # Default value: None\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export SERVE_COOKIES_SAME_SITE_MODE=<value>\n    # - Windows Command Line (CMD):\n    #    > set SERVE_COOKIES_SAME_SITE_MODE=<value>\n    #\n    same_site_mode: None\n\n## dsn ##\n#\n# Sets the data source name. This configures the backend where ORY Hydra persists data. If dsn is "memory", data will be written to memory and is lost when you restart this instance. ORY Hydra supports popular SQL databases. For more detailed configuration information go to: https://www.ory.sh/docs/hydra/dependencies-environment#sql\n#\n# Set this value using environment variables on\n# - Linux/macOS:\n#    $ export DSN=<value>\n# - Windows Command Line (CMD):\n#    > set DSN=<value>\n#\ndsn: dolor ex\n\n## webfinger ##\n#\n# Configures ./well-known/ settings.\n#\nwebfinger:\n  ## jwks ##\n  #\n  # Configures the /.well-known/jwks.json endpoint.\n  #\n  jwks:\n    ## broadcast_keys ##\n    #\n    # A list of JSON Web Keys that should be exposed at that endpoint. This is usually the public key for verifying OpenID Connect ID Tokens. However, you might want to add additional keys here as well.\n    #\n    # Default value: hydra.openid.id-token\n    #\n    # Examples:\n    # - hydra.jwt.access-token\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_JWKS_BROADCAST_KEYS=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_JWKS_BROADCAST_KEYS=<value>\n    #\n    broadcast_keys:\n      - hydra.openid.id-token\n\n  ## oidc_discovery ##\n  #\n  # Configures OpenID Connect Discovery (/.well-known/openid-configuration).\n  #\n  oidc_discovery:\n    ## client_registration_url ##\n    #\n    # Examples:\n    # - https://my-service.com/clients\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_CLIENT_REGISTRATION_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_CLIENT_REGISTRATION_URL=<value>\n    #\n    client_registration_url: https://my-service.com/clients\n\n    ## supported_claims ##\n    #\n    # A list of supported claims to be broadcasted. Claim "sub" is always included.\n    #\n    # Examples:\n    # - - email\n    #   - username\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_SUPPORTED_CLAIMS=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_SUPPORTED_CLAIMS=<value>\n    #\n    supported_claims:\n      - email\n      - username\n\n    ## supported_scope ##\n    #\n    # The scope OAuth 2.0 Clients may request. Scope `offline`, `offline_access`, and `openid` are always included.\n    #\n    # Examples:\n    # - - email\n    #   - whatever\n    #   - read.photos\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_SUPPORTED_SCOPE=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_SUPPORTED_SCOPE=<value>\n    #\n    supported_scope:\n      - email\n      - whatever\n      - read.photos\n\n    ## userinfo_url ##\n    #\n    # A URL of the userinfo endpoint to be advertised at the OpenID Connect Discovery endpoint /.well-known/openid-configuration. Defaults to ORY Hydra\'s userinfo endpoint at /userinfo. Set this value if you want to handle this endpoint yourself.\n    #\n    # Examples:\n    # - https://example.org/my-custom-userinfo-endpoint\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export WEBFINGER_OIDC_DISCOVERY_USERINFO_URL=<value>\n    # - Windows Command Line (CMD):\n    #    > set WEBFINGER_OIDC_DISCOVERY_USERINFO_URL=<value>\n    #\n    userinfo_url: https://example.org/my-custom-userinfo-endpoint\n\n## oidc ##\n#\n# Configures OpenID Connect features.\n#\noidc:\n  ## subject_identifiers ##\n  #\n  # Configures the Subject Identifier algorithm. For more information please head over to the documentation: https://www.ory.sh/docs/hydra/advanced#subject-identifier-algorithms\n  #\n  # Examples:\n  # - enabled:\n  #     - public\n  #     - pairwise\n  #   pairwise:\n  #     salt: some-random-salt\n  #\n  subject_identifiers:\n    ## enabled ##\n    #\n    # A list of algorithms to enable.\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export OIDC_SUBJECT_IDENTIFIERS_ENABLED=<value>\n    # - Windows Command Line (CMD):\n    #    > set OIDC_SUBJECT_IDENTIFIERS_ENABLED=<value>\n    #\n    enabled:\n      - public\n      - pairwise\n\n    ## pairwise ##\n    #\n    # Configures the pairwise algorithm.\n    #\n    pairwise:\n      ## salt ##\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export OIDC_SUBJECT_IDENTIFIERS_PAIRWISE_SALT=<value>\n      # - Windows Command Line (CMD):\n      #    > set OIDC_SUBJECT_IDENTIFIERS_PAIRWISE_SALT=<value>\n      #\n      salt: some-random-salt\n\n  ## dynamic_client_registration ##\n  #\n  # Configures OpenID Connect Dynamic Client Registration (exposed as admin endpoints /clients/...).\n  #\n  dynamic_client_registration:\n    ## default_scope ##\n    #\n    # The OpenID Connect Dynamic Client Registration specification has no concept of whitelisting OAuth 2.0 Scope. If you want to expose Dynamic Client Registration, you should set the default scope enabled for newly registered clients. Keep in mind that users can overwrite this default by setting the "scope" key in the registration payload, effectively disabling the concept of whitelisted scopes.\n    #\n    # Examples:\n    # - - openid\n    #   - offline\n    #   - offline_access\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export OIDC_DYNAMIC_CLIENT_REGISTRATION_DEFAULT_SCOPE=<value>\n    # - Windows Command Line (CMD):\n    #    > set OIDC_DYNAMIC_CLIENT_REGISTRATION_DEFAULT_SCOPE=<value>\n    #\n    default_scope:\n      - openid\n      - offline\n      - offline_access\n\n## urls ##\n#\nurls:\n  ## self ##\n  #\n  self:\n    ## issuer ##\n    #\n    # This value will be used as the "issuer" in access and ID tokens. It must be specified and using HTTPS protocol, unless --dangerous-force-http is set. This should typically be equal to the public value.\n    #\n    # Examples:\n    # - https://localhost:4444/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_ISSUER=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_ISSUER=<value>\n    #\n    issuer: https://localhost:4444/\n\n    ## public ##\n    #\n    # This is the base location of the public endpoints of your ORY Hydra installation. This should typically be equal to the issuer value. If left unspecified, it falls back to the issuer value.\n    #\n    # Examples:\n    # - https://localhost:4444/\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export URLS_SELF_PUBLIC=<value>\n    # - Windows Command Line (CMD):\n    #    > set URLS_SELF_PUBLIC=<value>\n    #\n    public: https://localhost:4444/\n\n  ## login ##\n  #\n  # Sets the login endpoint of the User Login & Consent flow. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-login.app/login\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGIN=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGIN=<value>\n  #\n  login: https://my-login.app/login\n\n  ## consent ##\n  #\n  # Sets the consent endpoint of the User Login & Consent flow. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-consent.app/consent\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_CONSENT=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_CONSENT=<value>\n  #\n  consent: https://my-consent.app/consent\n\n  ## logout ##\n  #\n  # Sets the logout endpoint. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-logout.app/logout\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_LOGOUT=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_LOGOUT=<value>\n  #\n  logout: https://my-logout.app/logout\n\n  ## error ##\n  #\n  # Sets the error endpoint. The error ui will be shown when an OAuth2 error occurs that which can not be sent back to the client. Defaults to an internal fallback URL.\n  #\n  # Examples:\n  # - https://my-error.app/error\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_ERROR=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_ERROR=<value>\n  #\n  error: https://my-error.app/error\n\n  ## post_logout_redirect ##\n  #\n  # When a user agent requests to logout, it will be redirected to this url afterwards per default.\n  #\n  # Examples:\n  # - https://my-example.app/logout-successful\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export URLS_POST_LOGOUT_REDIRECT=<value>\n  # - Windows Command Line (CMD):\n  #    > set URLS_POST_LOGOUT_REDIRECT=<value>\n  #\n  post_logout_redirect: https://my-example.app/logout-successful\n\n## strategies ##\n#\nstrategies:\n  ## scope ##\n  #\n  # Defines how scopes are matched. For more details have a look at https://github.com/ory/fosite#scopes\n  #\n  # Default value: wildcard\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export STRATEGIES_SCOPE=<value>\n  # - Windows Command Line (CMD):\n  #    > set STRATEGIES_SCOPE=<value>\n  #\n  scope: wildcard\n\n## ttl ##\n#\n# Configures time to live.\n#\nttl:\n  ## login_consent_request ##\n  #\n  # Configures how long a user login and consent flow may take.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_LOGIN_CONSENT_REQUEST=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_LOGIN_CONSENT_REQUEST=<value>\n  #\n  login_consent_request: 1h\n\n  ## access_token ##\n  #\n  # Configures how long access tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ACCESS_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ACCESS_TOKEN=<value>\n  #\n  access_token: 1h\n\n  ## refresh_token ##\n  #\n  # Configures how long refresh tokens are valid. Set to -1 for refresh tokens to never expire.\n  #\n  # Default value: 720h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_REFRESH_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_REFRESH_TOKEN=<value>\n  #\n  refresh_token: 720h\n\n  ## id_token ##\n  #\n  # Configures how long id tokens are valid.\n  #\n  # Default value: 1h\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_ID_TOKEN=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_ID_TOKEN=<value>\n  #\n  id_token: 1h\n\n  ## auth_code ##\n  #\n  # Configures how long auth codes are valid.\n  #\n  # Default value: 10m\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export TTL_AUTH_CODE=<value>\n  # - Windows Command Line (CMD):\n  #    > set TTL_AUTH_CODE=<value>\n  #\n  auth_code: 10m\n\n## oauth2 ##\n#\noauth2:\n  ## expose_internal_errors ##\n  #\n  # Set this to true if you want to share error debugging information with your OAuth 2.0 clients. Keep in mind that debug information is very valuable when dealing with errors, but might also expose database error codes and similar errors.\n  #\n  # Default value: false\n  #\n  # Examples:\n  # - true\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export OAUTH2_EXPOSE_INTERNAL_ERRORS=<value>\n  # - Windows Command Line (CMD):\n  #    > set OAUTH2_EXPOSE_INTERNAL_ERRORS=<value>\n  #\n  expose_internal_errors: true\n\n  ## hashers ##\n  #\n  # Configures hashing algorithms. Supports only BCrypt at the moment.\n  #\n  hashers:\n    ## bcrypt ##\n    #\n    # Configures the BCrypt hashing algorithm used for hashing Client Secrets.\n    #\n    bcrypt:\n      ## cost ##\n      #\n      # Sets the BCrypt cost. The higher the value, the more CPU time is being used to generate hashes.\n      #\n      # Default value: 10\n      #\n      # Set this value using environment variables on\n      # - Linux/macOS:\n      #    $ export OAUTH2_HASHERS_BCRYPT_COST=<value>\n      # - Windows Command Line (CMD):\n      #    > set OAUTH2_HASHERS_BCRYPT_COST=<value>\n      #\n      cost: 75604578\n\n  ## pkce ##\n  #\n  pkce:\n    ## enforced ##\n    #\n    # Sets whether PKCE should be enforced for all clients.\n    #\n    # Examples:\n    # - true\n    #\n    # Set this value using environment variables on\n    # - Linux/macOS:\n    #    $ export OAUTH2_PKCE_ENFORCED=<value>\n    # - Windows Command Line (CMD):\n    #    > set OAUTH2_PKCE_ENFORCED=<value>\n    #\n    enforced: true\n\n## secrets ##\n#\n# The secrets section configures secrets used for encryption and signing of several systems. All secrets can be rotated, for more information on this topic go to: https://www.ory.sh/docs/hydra/advanced#rotation-of-hmac-token-signing-and-database-and-cookie-encryption-keys\n#\nsecrets:\n  ## system ##\n  #\n  # The system secret must be at least 16 characters long. If none is provided, one will be generated. They key is used to encrypt sensitive data using AES-GCM (256 bit) and validate HMAC signatures. The first item in the list is used for signing and encryption. The whole list is used for verifying signatures and decryption.\n  #\n  # Examples:\n  # - - this-is-the-primary-secret\n  #   - this-is-an-old-secret\n  #   - this-is-another-old-secret\n  #\n  # Set this value using environment variables on\n  # - Linux/macOS:\n  #    $ export SECRETS_SYSTEM=<value>\n  # - Windows Command Line (CMD):\n  #    > set SECRETS_SYSTEM=<value>\n  #\n  system:\n    - this-is-the-primary-secret\n    - this-is-an-old-secret\n    - this-is-another-old-secret\n')))}d.isMDXComponent=!0},199:function(n,e,t){"use strict";t.d(e,"a",(function(){return c})),t.d(e,"b",(function(){return S}));var a=t(0),o=t.n(a);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function r(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},i=Object.keys(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(a=0;a<i.length;a++)t=i[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var u=o.a.createContext({}),d=function(n){var e=o.a.useContext(u),t=e;return n&&(t="function"==typeof n?n(e):r({},e,{},n)),t},c=function(n){var e=d(n.components);return o.a.createElement(u.Provider,{value:e},n.children)},m={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},p=Object(a.forwardRef)((function(n,e){var t=n.components,a=n.mdxType,i=n.originalType,s=n.parentName,u=l(n,["components","mdxType","originalType","parentName"]),c=d(t),p=a,S=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return t?o.a.createElement(S,r({ref:e},u,{components:t})):o.a.createElement(S,r({ref:e},u))}));function S(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var i=t.length,s=new Array(i);s[0]=p;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:a,s[1]=r;for(var u=2;u<i;u++)s[u]=t[u];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);