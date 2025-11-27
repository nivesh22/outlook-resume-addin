/*
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

/* global Office */

Office.onReady(() => {
    // If needed, Office.onReady can be used for initialization
});

// Register the function command
Office.actions.associate("attachResume", attachResume);

export async function attachResume(event: Office.AddinCommands.Event) {
    // Placeholder constants - User to update these
    const RESUME_URL = window.location.origin + "/assets/resume.pdf";
    const RESUME_NAME = "Nivesh_Elangovanraaj_Resume.pdf";

    const item = Office.context.mailbox.item;

    if (!item) {
        console.error("Error: Could not access the current message item.");
        event.completed();
        return;
    }

    // Show a "processing" notification
    const processingMessage: Office.NotificationMessageDetails = {
        type: Office.MailboxEnums.ItemNotificationMessageType.ProgressIndicator,
        message: "Attaching resume...",
        icon: "icon-16", // Ensure this matches an icon ID in manifest (we used icon16 there, let's check manifest)
    };
    item.notificationMessages.replaceAsync("action", processingMessage);

    // Check if we are in compose mode and addFileAttachmentAsync is available
    if (!item.addFileAttachmentAsync) {
        const errorMessage: Office.NotificationMessageDetails = {
            type: Office.MailboxEnums.ItemNotificationMessageType.ErrorMessage,
            message: "Error: Attachments are not supported in this mode.",
        };
        item.notificationMessages.replaceAsync("action", errorMessage);
        event.completed();
        return;
    }

    item.addFileAttachmentAsync(
        RESUME_URL,
        RESUME_NAME,
        { isInline: false },
        (asyncResult) => {
            if (asyncResult.status === Office.AsyncResultStatus.Failed) {
                const errorMessage: Office.NotificationMessageDetails = {
                    type: Office.MailboxEnums.ItemNotificationMessageType.ErrorMessage,
                    message: `Error: ${asyncResult.error.message}`,
                };
                item.notificationMessages.replaceAsync("action", errorMessage);
            } else {
                const successMessage: Office.NotificationMessageDetails = {
                    type: Office.MailboxEnums.ItemNotificationMessageType.InformationalMessage,
                    message: "Success! Resume attached.",
                    icon: "icon-16",
                    persistent: false,
                };
                item.notificationMessages.replaceAsync("action", successMessage);
            }
            // Signal that the task is finished
            event.completed();
        }
    );
}
