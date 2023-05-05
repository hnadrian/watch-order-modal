import React, { useState, useEffect } from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import DialogTitle from "@mui/material/DialogTitle";

interface WatchOrderModalProps {
  open: boolean;
  onClose: () => void;
}

const colors = {
  primaryGreen: "#1A3A32",
  secondaryGreen: "#1D7D67",
  modalBackgroundColor: "#FFFCF9",
  billingBackgroundColor: "#F6F4F1",
  primaryGreenText: "#314D46",
  secondaryGreenText: "#768882",
  secondaryBillingText: "#72847E",
  secondaryGrayText: "#9A9C9A",
};

const WatchOrderModal = (props: WatchOrderModalProps) => {
  const { open, onClose } = props;

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <Box
        style={{
          backgroundColor: colors.modalBackgroundColor,
          padding: "10px",
          minHeight: "500px",
          borderRadius: "25px",
        }}
      >
        <DialogTitle>
          <Box display="flex" justifyContent="flex-end">
            <IconButton edge="end" color="inherit" onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography
                variant="subtitle1"
                color={colors.secondaryGrayText}
                gutterBottom
              >
                CONGRATS!
              </Typography>
              <Typography
                variant="h5"
                color={colors.primaryGreenText}
                gutterBottom
              >
                Your Watch Sold!
              </Typography>
              <Typography
                variant="body2"
                color={colors.secondaryGreenText}
                gutterBottom
              >
                You have 1 business day to accept the sale. If you do not
                accept, it will be automatically rejected.
              </Typography>
              <Box mt={2} mb={2}>
                <Button
                  variant="contained"
                  style={{ backgroundColor: colors.primaryGreen }}
                  fullWidth
                >
                  Accept sale
                </Button>
              </Box>
              <Button
                variant="text"
                style={{ color: colors.primaryGreen }}
                fullWidth
              >
                Reject sale
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Box style={{ backgroundColor: colors.billingBackgroundColor }}>
                <Divider />
                <Box display="flex" alignItems="center">
                  <Box flexGrow={1}>
                    <Typography variant="body2" color="textPrimary">
                      {/* Watch display name */ "ABC"} {/* Watch  name */ "abc"}{" "}
                      {/* ref number */ "0123456"}
                    </Typography>
                    <Typography variant="body2" color="textPrimary">
                      {/* condition */ "NEW"} / {/* Year */ 2011}
                    </Typography>
                  </Box>
                  <Box>
                    <img
                      src="https://getbezel.mo.cloudinary.net/sandbox/1583bb64-0df2-4a69-a10d-119e464ab6fe.png"
                      //alt={`${/* Watch display name */} ${/* Watch  name */}`}
                      style={{ width: 50, height: 50 }}
                    />
                  </Box>
                </Box>
                <Divider />
                <Box my={2}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        color={colors.secondaryBillingText}
                      >
                        Selling Price
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.secondaryBillingText}
                      >
                        Level 1 Commission ({/* commission percentage */}%)
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.secondaryBillingText}
                      >
                        Seller Fee
                      </Typography>
                      <Typography variant="body2" color={colors.secondaryGreen}>
                        Bezel authentification
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        align="right"
                      >
                        {/* price */}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.secondaryBillingText}
                        align="right"
                      >
                        {/* comission price */}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.secondaryBillingText}
                        align="right"
                      >
                        {/* Seller fee */}
                      </Typography>
                      <Typography
                        variant="body2"
                        color={colors.secondaryGreen}
                        align="right"
                      >
                        {/* Bezel auth */}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Divider />
                <Box my={2}>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography variant="body2" color={colors.primaryGreen}>
                        Earnings
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography
                        variant="body2"
                        color={colors.primaryGreen}
                        align="right"
                      >
                        {/* total earning */}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default WatchOrderModal;
