for (var i = 0, length = headersSplit.length; i < length; i = i + 1) {
                        var header = headersSplit[i];
                        if (header !== '' && header.indexOf(':') !== -1) {
                            var dividerIndex = header.indexOf(':');
                            var key = header.substring(0, dividerIndex).trim().toLowerCase();
                            res.headers[key] = header.substring(dividerIndex + 1).trim();
                        }
                    }
