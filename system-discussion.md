# The Dispatch.tv System

What follows is a brief and condensed overview of the key concepts and moving
pieces in the Dispatch.tv app, as well as a few tricky things that affect some
of our technical and design choices. They will be useful to you in understanding
how you might fit in to the larger picture, and will also be something we will
discuss in more detail as part of direct technical interviews.

## Core Concepts

The system consists of a few main parts, which we'll give as sort of a glossary
of terms here:

  - *Users* are, as you might expect, the users of the Dispatch.tv app. All
    users can add a text or video comment to any channel in which they are
    participants. The simplest form of user is the *invited user*, which
    represents a user who was added to a channel by her email address but has
    never created a Dispatch.tv account. An invited user can reply with text or
    video comments to any channel to which she has been added. Invited users
    never need to create an account or log in to do these things. 
    
    *Active users* are users who have registered and confirmed an account, and
    these users can do everything an invited user can, but can also create new
    channels. Any active user can add a participant to a channel, but only the
    channel owner may remove a user from a channel, or delete the channel
    entirely. Invited users can become active users by registering.

  - A *channel* is a named stream of comments, with each comment containing at
    least one text or video component (or both). Each channel has an *owner*,
    which is the active user that created it, and a dynamic set of
    *participants*, which are active or invited users that can view or post to
    the channel. 

  - The app displays all of a user's channels in a condensed view called the
    *gallery*, similar to an inbox in a mail app. Each *gallery element*
    contains some basic details about the channel (name, owner), and a preview
    of its first comment and most recent comment. Gallery elements are ordered
    in the app from most recent on top.

  - Specific comments for a channel are viewed in the channel's *history*, with
    the most recent comment displayed first. *Playable comments* are those that
    have video. Those without video are simply *text comments*.

  - From the history view, it is possible also to access the *participant
    manager* in order to add or remove participants. This view is similar in
    some ways to the "To:" field in an email, but differs in that it is meant to
    execute transactional changes. So, simply typing in a user's address does
    not mean the user is added to the channel. The user must actually submit the
    change successfully to the server in order for this change to be made. The
    participant manager allows for multiple changes to be sent as a group.

  - Posting of playable comments is a two-part process. In the first part, the
    comment is created and information about the video is sent to the system,
    and the comment is *prepared*, but not yet *published*. This means that no
    users will see it in their history, but that the only thing remaining is the
    video data upload. Once the video data is uploaded, the app tells the system
    and the comment is published, making it visible to all of that channel's
    users.

  - Certain actions, such as the posting of a new comment, or the adding of a
    user to a new channel, are sent to relevant users via email, with links to
    the web or mobile app. We'll be consolidating to a single link once we add
    app detection and redirection to the mobile website.

## System Deployment

The system is deployed in a few different components:

  - The core data server is a Java server that sits in front of a MySql
    database, and which provides access to the web and mobile apps via a
    Json/Https api.

  - The website is a NodeJS website which runs separately from the data server
    and which accesses user and channel data purely view the Json api. The
    website uses google closure as its client-side javascript toolkit. It's
    likely we'll add jQuery to the mix as well.

  - The iOS app is a pure Objective-C app that uses the Json api.
