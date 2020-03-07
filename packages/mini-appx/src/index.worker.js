const message = new MessageChannel()



// Render和Worker通信
// Render和Worker的通信使用MessageChannel
// v8 worker
// service workService Worker运行在独立的worker上下文，
// 最大的优势是无法操作DOM BOM,

// 但是有一个问题是Service Worker的启动和Render部分的启动是串行的，必须是在WebView启动之后，由Render部分的JS发起。这对小程序来说就是较大的性能瓶颈。
