"use strict";(self.webpackChunkdocusaurus_template=self.webpackChunkdocusaurus_template||[]).push([[98889],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},h=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),h=c(n),d=i,m=h["".concat(s,".").concat(d)]||h[d]||p[d]||o;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=h;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},66903:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return h}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={id:"go",title:"Go"},s=void 0,c={unversionedId:"sdk/go",id:"version-v1.7/sdk/go",isDocsHomePage:!1,title:"Go",description:"To install the Go SDK, run:",source:"@site/versioned_docs/version-v1.7/sdk/go.md",sourceDirName:"sdk",slug:"/sdk/go",permalink:"/hydra/docs/v1.7/sdk/go",editUrl:"https://github.com/ory/hydra/edit/master/docs/versioned_docs/version-v1.7/sdk/go.md",tags:[],version:"v1.7",lastUpdatedBy:"aeneasr",lastUpdatedAt:1597407772,formattedLastUpdatedAt:"8/14/2020",frontMatter:{id:"go",title:"Go"},sidebar:"version-v1.7/docs",previous:{title:"Overview",permalink:"/hydra/docs/v1.7/sdk"},next:{title:"JavaScript",permalink:"/hydra/docs/v1.7/sdk/js"}},u=[{value:"Configuration",id:"configuration",children:[],level:2},{value:"Making requests",id:"making-requests",children:[],level:2},{value:"With Authorization",id:"with-authorization",children:[{value:"On every request",id:"on-every-request",children:[],level:3},{value:"TLS Termination",id:"tls-termination",children:[],level:3},{value:"Skip TLS Verification",id:"skip-tls-verification",children:[],level:3}],level:2}],p={toc:u};function h(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To install the Go SDK, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"go get -u -d github.com/ory/hydra-client-go\n")),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"We use code generation to generate our SDKs. The Go SDK is generated using\n",(0,o.kt)("a",{parentName:"p",href:"http://goswagger.io"},(0,o.kt)("inlineCode",{parentName:"a"},"go-swagger")),". The SDK is easily set up:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // admin.Admin.CreateOAuth2Client(...\n\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    // public.Public.RevokeOAuth2Token(...\n}\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Be aware that endpoints /oauth2/auth and /oauth2/token MUST NOT be consumed\nusing this SDK. Use\n",(0,o.kt)("a",{parentName:"p",href:"https://godoc.org/golang.org/x/oauth2"},"golang.org/x/oauth2")," instead.")),(0,o.kt)("h2",{id:"making-requests"},"Making requests"),(0,o.kt)("p",null,"Making requests is straight forward:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\n\nfunc main() {\n    adminURL := url.Parse("https://hydra.localhost:4445")\n    admin := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{adminURL.Scheme}, Host: adminURL.Host, BasePath: adminURL.Path})\n\n    // It is important to create the parameters using `New...`, otherwise requests will fail!\n    result, err := c.Admin.CreateOAuth2Client(\n        admin.NewCreateOAuth2ClientParams().WithBody(&models.Client{\n        ClientID: "scoped",\n    }))\n    if err != nil {\n        // err is not nil when the request failed (usually a 404, 401, 409 error)\n        // You can distinguish the errors by type-asserting err, for example:\n        switch e := err.(type) {\n        case (*admin.CreateOAuth2ClientConflict):\n            // do something...\n        }\n    }\n\n    // if err is nil, then result is set. The result payload/body can be retrieved using result.Payload.\n    fmt.Printf("Got client: %+v", result.Payload)\n}\n')),(0,o.kt)("h2",{id:"with-authorization"},"With Authorization"),(0,o.kt)("p",null,"Some endpoints require e.g. Basic Authorization:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    public := hydra.NewHTTPClientWithConfig(nil, &client.TransportConfig{Schemes: []string{publicURL.Scheme}, Host: publicURL.Host, BasePath: publicURL.Path})\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')),(0,o.kt)("p",null,"For more information on Authorization, check the\n",(0,o.kt)("a",{parentName:"p",href:"https://goswagger.io/generate/client.html#authentication"},"go-swagger documentation"),"."),(0,o.kt)("h3",{id:"on-every-request"},"On every request"),(0,o.kt)("p",null,"You may want to protect ORY Hydra using e.g. OAuth2 Access Tokens. In that case,\nyou can enhance the SDK by using the OAuth2 Client:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\nimport "golang.org/x/oauth2/clientcredentials"\n\nfunc main() {\n    publicURL := url.Parse("https://hydra.localhost:4444")\n    ht := httptransport.NewWithClient(\n        publicURL.Host,\n        publicURL.Path,\n        []string{publicURL.Scheme},\n        clientcredentials.Config{\n            TokenURL:"http://hydra.localhost:4444/oauth2/token",\n            ClientID:"my-client",\n            ClientSecret:"my-secret",\n            Scopes:[]string{"scope-a", "scope-b"},\n        }.Client(context.Background()),\n    )\n\n    public := hydra.New(ht, nil)\n\n    _, err := client.Public.RevokeOAuth2Token(\n        public.NewRevokeOAuth2TokenParams().WithToken(c.token),\n        httptransport.BasicAuth("my-client", "foobar"),\n    )\n}\n')),(0,o.kt)("h3",{id:"tls-termination"},"TLS Termination"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nimport "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"\nimport "net/http"\n\nfunc main() {\n\n  tlsTermClient := new(http.Client)\n  rt := WithHeader(tlsTermClient.Transport)\n  rt.Set("X-Forwarded-Proto", "https")\n  tlsTermClient.Transport = rt\n\n    transport := httptransport.NewWithClient("host:port", "/", []string{"https"}, tlsTermClient)\n    hydra := client.New(transport, nil)\n\n  // ...\n}\n\ntype withHeader struct {\n        http.Header\n        rt http.RoundTripper\n}\n\nfunc WithHeader(rt http.RoundTripper) withHeader {\n        if rt == nil {\n                rt = http.DefaultTransport\n        }\n\n        return withHeader{Header: make(http.Header), rt: rt}\n}\n\nfunc (h withHeader) RoundTrip(req *http.Request) (*http.Response, error) {\n        for k, v := range h.Header {\n                req.Header[k] = v\n        }\n\n        return h.rt.RoundTrip(req)\n}\n')),(0,o.kt)("h3",{id:"skip-tls-verification"},"Skip TLS Verification"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},'import "github.com/ory/hydra-client-go/client"\nimport httptransport "github.com/go-openapi/runtime/client"#\nimport "net/http"\n\nfunc main() {\n    skipTlsClient := &http.Client{\n        Transport: &http.Transport{\n            TLSClientConfig: &tls.Config{InsecureSkipVerify: true},\n        },\n        Timeout: 10,\n    }\n    transport := httptransport.NewWithClient("host:port", "/", []string{"https"}, skipTlsClient)\n    hydra := client.New(transport, nil)\n\n  // ...\n}\n')))}h.isMDXComponent=!0}}]);