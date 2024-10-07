package ru.sp.commoneditor.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;
import ru.sp.commoneditor.model.DocumentUpdate;

@Controller
public class TextController {

    @MessageMapping("/edit")
    @SendTo("/topic/updates")
    public DocumentUpdate updateDocument(DocumentUpdate message) {
        return new DocumentUpdate(HtmlUtils.htmlEscape(message.content()));
    }
}