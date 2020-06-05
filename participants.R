packages <- c("httr", "RMySQL", "jsonlite", "data.table", "stringr")
suppressMessages(library(data.table))
# suppressWarnings(library(RSQLite))

if (length(setdiff(packages, rownames(installed.packages()))) > 0) {
  install.packages(setdiff(packages, rownames(installed.packages())))
}

library(httr)
# library(RSQLite)
library(RMySQL)
library(jsonlite)
library(data.table)
library(stringr)

# input_file <- "/media/serge/Data/Upwork/Iain/pittask/participants.db"
# output_folder <- "/media/serge/Data/Upwork/Iain/pittask/Participants"

# Options ------------------------------------------------------------------
options(useFancyQuotes = FALSE)

# Struct ------------------------------------------------------------------

Parameters <- data.table(
  PIN = character(),
  complete = character(),
  date = character(), 
  `calendar time` = character(),
  location = character(),
  `commit code` = character(),
  version = character(),
  `parameter name` = character(), 
  `parameter value` = character()
)

Demographics <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = character()
)

OCI_R <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = numeric()
)

MOVES <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

DASS <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = numeric()
)

ASRS5 <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

EAT_26 <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = character()
)

RAADS_14 <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

PHQ_9 <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = numeric()
)

GAD_7 <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = character()
)

ASRM <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = numeric()
)

PC_PTSD_5 <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = character()
)

PRIME_R <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

AUDIT <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

PGSI <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

YIAT <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

SmokingStatus <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

FTND <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = character()
)

ISI <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = numeric()
)

PID_5_BF <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = numeric(),
  Response = numeric()
)

LSAS <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = numeric()
)

ICAR <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  `Response ID` = character(),
  `Response content` = character()
)

SDS <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  `commit code` = character(),
  `version number` = character(),
  `Item ID` = character(),
  Response = character()
)

VVR <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  stage = character(),
  `commit code` = character(),
  `version number` = character(),
  location = character(),
  `block number` = character(),
  `Item ID` = character(),
  `Food item` = character(),
  `correct` = character(),
  `strength of belief` = character()
)

FoodRatings <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  location = character(),
  version = character(),
  `Item ID` = character(),
  `Pre-rating` = character(),
  `Post-rating` = character()
)

HungerRating <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  location = character(),
  `Hunger pre-rating` = character(),
  `Hunger post-rating` = character()
)

ConsentFeedback <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  location = character(),
  `Question number` = numeric(),
  `Question Text` = character(),
  `Y/N` = character()
)

PavCondition <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  `commit code` = character(),
  version = character(),
  location = character(),   
  Q = numeric(),
  `response submitted` = character(),
  Correct = character()
)

CompleteData <- data.table(
  PIN = character(),
  complete = character(),
  date = character(),
  `calendar time` = character(),
  timestamp = numeric(),
  location = character(),
  timezone = character(),
  stage = character(),
  `commit code` = character(),
  `version number` = character(),
  `block number` = character(),
  `interval number` = character(),
  `event type` = character(),
  `event raw details` = character(),
  `event converted details` = character()
)

# Geo ---------------------------------------------------------------------

getGeoInfoByIP <- function(ipList){
  cat("\n  Processing IP addresses . . .\n")
  ipBatches <- split(ipList, rep(1:ceiling(length(ipList)/100), each = 100)[1:length(ipList)])
  countries <- c()
  timezones <- c()
  
  for(i in 1:length(ipBatches)){
    if(i %% 140 == 0){
      for(sec in seq(60, 1)){
        cat("\r", paste("  Please, wait for a ", sec, " seconds"))
        flush.console()
        Sys.sleep(1)
      }
      cat("\n")
    }
    
    batch <- lapply(ipBatches[[i]], function(ip){
      str_c("{\"query\":\"", ip, "\"}")
    })
    
    json <- str_c("[", paste(batch, collapse = ","), "]")
    request <- POST("http://ip-api.com/batch?fields=country,timezone,status", body = json)
    
    stop_for_status(request)
    response <- content(request, "text")

    countries <- c(countries, ifelse(is.null(fromJSON(response)$country), "local", fromJSON(response[i])$country))
    timezones <- c(timezones, ifelse(is.null(fromJSON(response)$timezone), "local", fromJSON(response[i])$timezone))
  }
  
  list("countries" = countries, "timezones" = timezones)
}

formatDateTime <- function(dateTime){
  as.POSIXct(dateTime/1000, origin = "1970-01-01")
}

# Connection --------------------------------------------------------------

connection = dbConnect(MySQL(), user = 'root', password='Psiturk_1', dbname = 'pittask', host='127.0.0.1')

query <- tryCatch(
  dbSendQuery(connection, "SELECT * FROM turkdemo"),
  error = function(e){ "NA" })

# Processing --------------------------------------------------------------

if(isClass(query))
{
  data <- dbFetch(query, n = -1)
  recordsCount <- nrow(data)
  geoInfo <- getGeoInfoByIP(data$ipaddress)
  
  cat("\n  Processing data . . .\n")
  
  progressBar <- txtProgressBar(min = 0, max = recordsCount, style = 3, char = '|')
  
  for(i in 1:recordsCount) {
    if(is.na(data$datastring[i])){
      setTxtProgressBar(progressBar, i)
      next
    }
  
    json <- fromJSON(data$datastring[i], T, T)
    dateTime <- formatDateTime(json$data$dateTime)
    dateTime_ms <- json$data$dateTime
    trialdata <- json$data$trialdata
    
    PIN <- sQuote(str_pad(toString(i), 5, "left", pad = "0"))
    complete <- ifelse(is.na(data$endhit[i]), "n", "y")
    commit <- trialdata$commit[1]
    version <- trialdata$`counter-balancing version`[1]

    if(is.na(geoInfo$countries[i])) {
      country = "local"
      timezone = "local"
    } else {
      country = geoInfo$countries[i]
      timezone = geoInfo$timezones[i]
    }

    # Parameters --------------------------------------------------------------
    
    parameters_index <- which(trialdata$stage_name %in% "Parameters")
    
    if(length(parameters_index ) != 0){
      parameters_response <- fromJSON(trialdata[parameters_index,]$parameters)
      
      date <- format(as.Date(dateTime[parameters_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[parameters_index]))
      
      for(j in 1:length(parameters_response)){
        Parameters <- rbindlist(list(Parameters, list(
          PIN, complete, date, time,
          country, commit, version,
          names(parameters_response)[j],
          parameters_response[[j]]
        )))
      }
    }
    
    # Demographics --------------------------------------------------------------------
    
    demographics_index <- which(trialdata$stage_name %in% "\"Demographics\"")
    
    if(length(demographics_index) != 0){
      demographics_responses <- fromJSON(trialdata[demographics_index,]$responses)
      demographics_timestamps <- fromJSON(trialdata[demographics_index,]$timestamp)
      
      date <- format(as.Date(dateTime[demographics_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[demographics_index]))
      time_elapsed <- trialdata$time_elapsed[demographics_index]
      time_ms <- dateTime_ms[demographics_index] - time_elapsed

      for(j in 1:length(demographics_responses)){
        Demographics <- rbindlist(list(Demographics, list(
          PIN, complete, date,
          ifelse(demographics_timestamps[[j]] == 'NA', 'NA', as.character(as.ITime(formatDateTime(time_ms + as.numeric(
            if(demographics_timestamps[[j]] != 'NA') demographics_timestamps[[j]]
          ))))),
          demographics_timestamps[[j]],
          country, commit, version,
          names(demographics_responses)[j],
          demographics_responses[[j]]
        )))
      }
    } 
    
    # OCI-R -------------------------------------------------------------------
    
    ocir_index <- which(trialdata$stage_name %in% "\"OCI-R\"")
    
    if(length(ocir_index) != 0){
      ocir_responses <- fromJSON(trialdata[ocir_index,]$responses)
      ocir_timestamps <- fromJSON(trialdata[ocir_index,]$timestamp)
      
      date <- format(as.Date(dateTime[ocir_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[ocir_index]))

      time_elapsed <- trialdata$time_elapsed[ocir_index]
      time_ms <- dateTime_ms[ocir_index] - time_elapsed
      
      for(j in 1:length(ocir_responses)){
        OCI_R <- rbindlist(list(OCI_R, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(ocir_timestamps[[j]])))),
          ocir_timestamps[[j]],
          country, commit, version,
          names(ocir_responses)[j],
          ocir_responses[[j]]
        )))
      }
    }
    
    # MOVES --------------------------------------------------------------------
    
    moves_index <- which(trialdata$stage_name %in% "\"MOVES\"")
    
    if(length(moves_index) != 0){
      moves_responses <- fromJSON(trialdata[moves_index,]$responses)
      moves_timestamps <- fromJSON(trialdata[moves_index,]$timestamp)
      
      date <- format(as.Date(dateTime[moves_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[moves_index]))

      time_elapsed <- trialdata$time_elapsed[moves_index]
      time_ms <- dateTime_ms[moves_index] - time_elapsed
      
      for(j in 1:length(moves_responses)){
        MOVES <- rbindlist(list(MOVES, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(moves_timestamps[[j]])))),
          moves_timestamps[[j]],
          country, commit, version,
          names(moves_responses)[j],
          moves_responses[[j]]
        )))
      }
    }

    # DASS --------------------------------------------------------------------
    
    dass_index <- which(trialdata$stage_name %in% "\"DASS\"")
    
    if(length(dass_index) != 0){
      dass_responses <- fromJSON(trialdata[dass_index,]$responses)
      dass_timestamps <- fromJSON(trialdata[dass_index,]$timestamp)
      
      date <- format(as.Date(dateTime[dass_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[dass_index]))

      time_elapsed <- trialdata$time_elapsed[dass_index]
      time_ms <- dateTime_ms[dass_index] - time_elapsed
      
      for(j in 1:length(dass_responses)){
        DASS <- rbindlist(list(DASS, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(dass_timestamps[[j]])))),
          dass_timestamps[[j]],
          country, commit, version,
          names(dass_responses)[j],
          dass_responses[[j]]
        )))
      }
    }
    
    # ASRS-5 --------------------------------------------------------------------
    
    asrs5_index <- which(trialdata$stage_name %in% "\"ASRS-5\"")
    
    if(length(asrs5_index) != 0){
      asrs5_responses <- fromJSON(trialdata[asrs5_index,]$responses)
      asrs5_timestamps <- fromJSON(trialdata[asrs5_index,]$timestamp)
      
      date <- format(as.Date(dateTime[asrs5_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[asrs5_index]))

      time_elapsed <- trialdata$time_elapsed[asrs5_index]
      time_ms <- dateTime_ms[asrs5_index] - time_elapsed
      
      for(j in 1:length(asrs5_responses)){
        ASRS5 <- rbindlist(list(ASRS5, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(asrs5_timestamps[[j]])))),
          asrs5_timestamps[[j]],
          country, commit, version,
          names(asrs5_responses)[j],
          asrs5_responses[[j]]
        )))
      }
    }
    
    # EAT-26 --------------------------------------------------------------------
    
    eat26_index <- which(trialdata$stage_name %in% "\"EAT-26\"")
    
    if(length(eat26_index) != 0){
      eat26_responses <- fromJSON(trialdata[eat26_index,]$responses)
      eat26_timestamps <- fromJSON(trialdata[eat26_index,]$timestamp)
      
      date <- format(as.Date(dateTime[eat26_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[eat26_index]))
      
      time_elapsed <- trialdata$time_elapsed[eat26_index]
      time_ms <- dateTime_ms[eat26_index] - time_elapsed

      for(j in 1:length(eat26_responses)){
        EAT_26 <- rbindlist(list(EAT_26, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(eat26_timestamps[[j]])))),
          eat26_timestamps[[j]],
          country, commit, version,
          names(eat26_responses)[j],
          eat26_responses[[j]]
        )))
      }
    } 

    # RAADS-14 ----------------------------------------------------------------

    raads14_index <- which(trialdata$stage_name %in% "\"RAADS-14\"")
    
    if(length(raads14_index) != 0){
      raads14_responses <- fromJSON(trialdata[raads14_index,]$responses)
      raads14_timestamps <- fromJSON(trialdata[raads14_index,]$timestamp)

      time_elapsed <- trialdata$time_elapsed[raads14_index]
      time_ms <- dateTime_ms[raads14_index] - time_elapsed
      
      date <- format(as.Date(dateTime[raads14_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[raads14_index]))
      
      for(j in 1:length(raads14_responses)){
        RAADS_14 <- rbindlist(list(RAADS_14, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(raads14_timestamps[[j]])))),
          raads14_timestamps[[j]],
          country, commit, version,
          names(raads14_responses)[j],
          raads14_responses[[j]]
        )))
      }
    } 
    
    # PHQ-9 -------------------------------------------------------------------
    
    phq9_index <- which(trialdata$stage_name %in% "\"PHQ-9\"")
    
    if(length(phq9_index) != 0){
      phq9_responses <- fromJSON(trialdata[phq9_index,]$responses)
      phq9_timestamps <- fromJSON(trialdata[phq9_index,]$timestamp)
      
      date <- format(as.Date(dateTime[phq9_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[phq9_index]))

      time_elapsed <- trialdata$time_elapsed[phq9_index]
      time_ms <- dateTime_ms[phq9_index] - time_elapsed
      
      for(j in 1:length(phq9_responses)){
        PHQ_9 <- rbindlist(list(PHQ_9, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(phq9_timestamps[[j]])))),
          phq9_timestamps[[j]],
          country, commit, version,
          names(phq9_responses)[j],
          phq9_responses[[j]]
        )))
      }
    }
    
    # GAD-7 -------------------------------------------------------------------
    
    gad7_index <- which(trialdata$stage_name %in% "\"GAD-7\"")
    
    if(length(gad7_index) != 0){
      gad7_responses <- fromJSON(trialdata[gad7_index,]$responses)
      gad7_timestamps <- fromJSON(trialdata[gad7_index,]$timestamp)
      
      date <- format(as.Date(dateTime[gad7_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[gad7_index]))

      time_elapsed <- trialdata$time_elapsed[gad7_index]
      time_ms <- dateTime_ms[gad7_index] - time_elapsed
      
      for(j in 1:length(gad7_responses)){
        GAD_7 <- rbindlist(list(GAD_7, list(
          PIN, complete, date, 
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(gad7_timestamps[[j]])))),
          gad7_timestamps[[j]],
          country, commit, version,
          names(gad7_responses)[j],
          gad7_responses[[j]]
        )))
      }
    }
    
    # ASRM --------------------------------------------------------------------
    
    asrm_index <- which(trialdata$stage_name %in% "\"ASRM\"")
    
    if(length(asrm_index) != 0){
      asrm_responses <- fromJSON(trialdata[asrm_index,]$responses)
      asrm_timestamps <- fromJSON(trialdata[asrm_index,]$timestamp)
      
      date <- format(as.Date(dateTime[asrm_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[asrm_index]))
      
      time_elapsed <- trialdata$time_elapsed[asrm_index]
      time_ms <- dateTime_ms[asrm_index] - time_elapsed

      for(j in 1:length(asrm_responses)){
        ASRM <- rbindlist(list(ASRM, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(asrm_timestamps[[j]])))),
          asrm_timestamps[[j]],
          country, commit, version,
          names(asrm_responses)[j],
          asrm_responses[[j]]
        )))
      }
    }
    
    # PC-PTSD-5 ---------------------------------------------------------------
    
    pc_ptsd_5_index <- which(trialdata$stage_name %in% "\"PC-PTSD-5\"")
    
    if(length(pc_ptsd_5_index) != 0){
      pc_ptsd_5_responses <- fromJSON(trialdata[pc_ptsd_5_index,]$responses)
      pc_ptsd_5_timestamps <- fromJSON(trialdata[pc_ptsd_5_index,]$timestamp)
      
      date <- format(as.Date(dateTime[pc_ptsd_5_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[pc_ptsd_5_index]))

      time_elapsed <- trialdata$time_elapsed[pc_ptsd_5_index]
      time_ms <- dateTime_ms[pc_ptsd_5_index] - time_elapsed
      
      for(j in 1:length(pc_ptsd_5_responses)){
        PC_PTSD_5 <- rbindlist(list(PC_PTSD_5, list(
          PIN, complete, date,
          ifelse(pc_ptsd_5_timestamps[[j]] == 'NA', 'NA', as.character(as.ITime(formatDateTime(time_ms + as.numeric(
            if(pc_ptsd_5_timestamps[[j]] != 'NA') pc_ptsd_5_timestamps[[j]]
          ))))), 
          pc_ptsd_5_timestamps[[j]],
          country, commit, version,
          names(pc_ptsd_5_responses)[j],
          pc_ptsd_5_responses[[j]]
        )))
      }
    }
    
    # PRIME-R -----------------------------------------------------------------

    prime_r_index <- which(trialdata$stage_name %in% "\"PRIME-R\"")
    
    if(length(prime_r_index) != 0){
      prime_r_responses <- fromJSON(trialdata[prime_r_index,]$responses)
      prime_r_timestamps <- fromJSON(trialdata[prime_r_index,]$timestamp)
      
      date <- format(as.Date(dateTime[prime_r_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[prime_r_index]))
      
      time_elapsed <- trialdata$time_elapsed[prime_r_index]
      time_ms <- dateTime_ms[prime_r_index] - time_elapsed

      for(j in 1:length(prime_r_responses)){
        PRIME_R <- rbindlist(list(PRIME_R, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(prime_r_timestamps[[j]])))),
          prime_r_timestamps[[j]],
          country, commit, version,
          names(prime_r_responses)[j],
          prime_r_responses[[j]]
        )))
      }
    }
    
    # AUDIT --------------------------------------------------------------------
    
    audit_index <- which(trialdata$stage_name %in% "\"AUDIT\"")
    
    if(length(audit_index) != 0){
      audit_responses <- fromJSON(trialdata[audit_index,]$responses)
      audit_index_timestamps <- fromJSON(trialdata[audit_index,]$timestamp)
      
      date <- format(as.Date(dateTime[audit_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[audit_index]))

      time_elapsed <- trialdata$time_elapsed[audit_index]
      time_ms <- dateTime_ms[audit_index] - time_elapsed

      for(j in 1:length(audit_responses)){
        AUDIT <- rbindlist(list(AUDIT, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(audit_index_timestamps[[j]])))),
          audit_index_timestamps[[j]],
          country, commit, version,
          names(audit_responses)[j],
          audit_responses[[j]]
        )))
      }
    }
    
    # PGSI --------------------------------------------------------------------
    
    pgsi_index <- which(trialdata$stage_name %in% "\"PGSI\"")
    
    if(length(pgsi_index) != 0){
      pgsi_responses <- fromJSON(trialdata[pgsi_index,]$responses)
      pgsi_timestamps <- fromJSON(trialdata[pgsi_index,]$timestamp)
      
      date <- format(as.Date(dateTime[pgsi_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[pgsi_index]))
      
      time_elapsed <- trialdata$time_elapsed[pgsi_index]
      time_ms <- dateTime_ms[pgsi_index] - time_elapsed

      for(j in 1:length(pgsi_responses)){
        PGSI <- rbindlist(list(PGSI, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(pgsi_timestamps[[j]])))),
          pgsi_timestamps[[j]],
          country, commit, version,
          names(pgsi_responses)[j],
          pgsi_responses[[j]]
        )))
      }
    }
    
    # YIAT --------------------------------------------------------------------
    
    yiat_index <- which(trialdata$stage_name %in% "\"YIAT\"")
    
    if(length(yiat_index) != 0){
      yiat_responses <- fromJSON(trialdata[yiat_index,]$responses)
      yiat_timestamps <- fromJSON(trialdata[yiat_index,]$timestamp)
            
      date <- format(as.Date(dateTime[yiat_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[yiat_index]))

      time_elapsed <- trialdata$time_elapsed[yiat_index]
      time_ms <- dateTime_ms[yiat_index] - time_elapsed

      for(j in 1:length(yiat_responses)){
        YIAT <- rbindlist(list(YIAT, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(yiat_timestamps[[j]])))),
          yiat_timestamps[[j]],
          country, commit, version,
          names(yiat_responses)[j],
          yiat_responses[[j]]
        )))
      }
    }
    
    # SmokingStatus --------------------------------------------------------------------
    
    SmokingStatus_index <- which(trialdata$stage_name %in% "\"Smoking Status\"")
    
    if(length(SmokingStatus_index) != 0){
      SmokingStatus_responses <- fromJSON(trialdata[SmokingStatus_index,]$responses)
      SmokingStatus_timestamps <- fromJSON(trialdata[SmokingStatus_index,]$timestamp)
      
      date <- format(as.Date(dateTime[SmokingStatus_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[SmokingStatus_index]))

      time_elapsed <- trialdata$time_elapsed[SmokingStatus_index]
      time_ms <- dateTime_ms[SmokingStatus_index] - time_elapsed

      for(j in 1:length(SmokingStatus_responses)){
        SmokingStatus <- rbindlist(list(SmokingStatus, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(SmokingStatus_timestamps[[j]])))),
          SmokingStatus_timestamps[[j]],
          country, commit, version,
          names(SmokingStatus_responses)[j],
          SmokingStatus_responses[[j]]
        )))
      }
    } 
    
    # FTND --------------------------------------------------------------------
    
    ftnd_index <- which(trialdata$stage_name %in% "\"FTND\"")
    
    if(length(ftnd_index) != 0){
      ftnd_responses <- fromJSON(trialdata[ftnd_index,]$responses)
      ftnd_timestamps <- fromJSON(trialdata[ftnd_index,]$timestamp)
      
      date <- format(as.Date(dateTime[ftnd_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[ftnd_index]))

      time_elapsed <- trialdata$time_elapsed[ftnd_index]
      time_ms <- dateTime_ms[ftnd_index] - time_elapsed

      for(j in 1:length(ftnd_responses)){
        FTND <- rbindlist(list(FTND, list(
          PIN, complete, date,
          ifelse(ftnd_timestamps[[j]] == 'NA', 'NA', as.character(as.ITime(formatDateTime(time_ms + as.numeric(
            if(ftnd_timestamps[[j]] != 'NA') ftnd_timestamps[[j]]
          ))))), 
          ftnd_timestamps[[j]],
          country, commit, version,
          names(ftnd_responses)[j],
          ftnd_responses[[j]]
        )))
      }
    } 

    # ISI ---------------------------------------------------------------------
    
    isi_index <- which(trialdata$stage_name %in% "\"ISI\"")
    
    if(length(isi_index) != 0){
      isi_responses <- fromJSON(trialdata[isi_index,]$responses)
      isi_timestamps <- fromJSON(trialdata[isi_index,]$timestamp)
      
      date <- format(as.Date(dateTime[isi_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[isi_index]))

      time_elapsed <- trialdata$time_elapsed[isi_index]
      time_ms <- dateTime_ms[isi_index] - time_elapsed

      for(j in 1:length(isi_responses)){
        ISI <- rbindlist(list(ISI, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(isi_timestamps[[j]])))),
          isi_timestamps[[j]],
          country, commit, version,
          names(isi_responses)[j],
          isi_responses[[j]]
        )))
      }
    } 
    
    # PID-5-BF ----------------------------------------------------------------
    
    pid5bf_index <- which(trialdata$stage_name %in% "\"PID-5-BF\"")
    
    if(length(pid5bf_index) != 0){
      pid5bf_responses <- fromJSON(trialdata[pid5bf_index,]$responses)
      pid5bf_timestamps <- fromJSON(trialdata[pid5bf_index,]$timestamp)
      
      date <- format(as.Date(dateTime[pid5bf_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[pid5bf_index]))

      time_elapsed <- trialdata$time_elapsed[pid5bf_index]
      time_ms <- dateTime_ms[pid5bf_index] - time_elapsed

      for(j in 1:length(pid5bf_responses)){
        PID_5_BF <- rbindlist(list(PID_5_BF, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(pid5bf_timestamps[[j]])))),
          pid5bf_timestamps[[j]],
          country, commit, version,
          names(pid5bf_responses)[j],
          pid5bf_responses[[j]]
        )))
      }
    } 
    
    # LSAS --------------------------------------------------------------------
    
    lsas_index <- which(trialdata$stage_name %in% "\"LSAS\"")
    
    if(length(lsas_index) != 0){
      lsas_responses <- fromJSON(trialdata[lsas_index,]$responses)
      lsas_timestamps <- fromJSON(trialdata[lsas_index,]$timestamp)
      
      date <- format(as.Date(dateTime[lsas_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[lsas_index]))
 
      time_elapsed <- trialdata$time_elapsed[lsas_index]
      time_ms <- dateTime_ms[lsas_index] - time_elapsed
     
      for(j in 1:length(lsas_responses)){
        LSAS <- rbindlist(list(LSAS, list(
          PIN, complete, date,
          as.character(as.ITime(formatDateTime(time_ms + as.numeric(lsas_timestamps[[j]])))),
          lsas_timestamps[[j]],
          country, commit, version,
          names(lsas_responses)[j],
          lsas_responses[[j]]
        )))
      }
    } 
    
    # ICAR --------------------------------------------------------------------

    icar_index <- which(trialdata$stage_name %in% "\"ICAR\"")
    
    if(length(icar_index) != 0){
      icar_responses <- fromJSON(trialdata[icar_index,]$responses)
      icar_timestamps <- fromJSON(trialdata[icar_index,]$timestamp)
      icar_response_id <- fromJSON(trialdata[icar_index,]$responseId)
    
      date <- format(as.Date(dateTime[icar_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[icar_index]))
      
      for(j in 1:length(icar_responses)){
        ICAR <- rbindlist(list(ICAR, list(
          PIN, complete, date, time, 
          icar_timestamps[[j]],
          country, commit, version,
          names(icar_responses)[j],
          icar_response_id[[j]],
          icar_responses[[j]]
        )))
      }
    } 
    
    # SDS ---------------------------------------------------------------------
    
    sds_index <- which(trialdata$stage_name %in% "\"SDS\"")
    
    if(length(sds_index) != 0){
      sds_responses <- fromJSON(trialdata[sds_index,]$responses)
      sds_timestamps <- fromJSON(trialdata[sds_index,]$timestamp)
      
      date <- format(as.Date(dateTime[sds_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[sds_index]))
 
      time_elapsed <- trialdata$time_elapsed[sds_index]
      time_ms <- dateTime_ms[sds_index] - time_elapsed
     
      for(j in 1:length(sds_responses)){
        SDS <- rbindlist(list(SDS, list(
          PIN, complete, date,
          ifelse(sds_timestamps[[j]] == 'NA', 'NA', as.character(as.ITime(formatDateTime(time_ms + as.numeric(
            if(sds_timestamps[[j]] != 'NA') sds_timestamps[[j]]
          ))))), 
          sds_timestamps[[j]],
          country, commit, version,
          names(sds_responses)[j],
          sds_responses[[j]]
        )))
      }
    }

    # VVR ---------------------------------------------------------------------
    vvr_stages <- trialdata$vvr_stage

    if(!is.null(vvr_stages)){
      
      for(j in 1:length(vvr_stages)){

        date <- format(as.Date(dateTime[j]), "%d-%m-%Y")
        time <- as.character(as.ITime(dateTime[j]))

        if(!is.na(trialdata$vvr_stage[j])) {
          VVR <- rbindlist(list(VVR, list(
            PIN, complete, date, time,
            trialdata$timestamp[j],
            fromJSON(trialdata$vvr_stage[j]), commit, version,
            country,
            trialdata$block_number[j],
            trialdata$item_id[j],
            trialdata$food_item[j],
            trialdata$correct[j],
            trialdata$strength_of_belief[j]
          )))
        }
        
      }
    }
    
    # FoodRatings ------------------------------------------------------------
    
    food_ratings_indices <- which(
      trialdata$stage_name %in% "\"food-and-hunger-questions\"" &
        trialdata$food_item != "hunger")
    
    if(length(food_ratings_indices) != 0){
      food_ratings <- trialdata[food_ratings_indices,]
      
      for(fr in 1:dim(food_ratings)[1]) {
        FoodRatings <- rbindlist(list(FoodRatings, list(
          PIN,  complete,
          format(as.Date(dateTime[food_ratings_indices[fr]]), "%d-%m-%Y"),
          country, version, fromJSON(food_ratings$food_item[fr]),
          ifelse(fromJSON(food_ratings$rating_status[fr]) == "pre-rating", fromJSON(food_ratings$rating[fr]), ""),
          ifelse(fromJSON(food_ratings$rating_status[fr]) == "post-rating", fromJSON(food_ratings$rating[fr]), "")
        )))
      }
    }
    
    # HungerRatings ---------------------------------------------------------
    
    hunger_rating_indices <- which(
      trialdata$stage_name %in% "\"food-and-hunger-questions\"" &
        trialdata$food_item == "\"hunger\"")
    
    if(length(hunger_rating_indices) != 0){
      hunger_ratings <- trialdata[hunger_rating_indices,]
      
      for(hr in 1:dim(hunger_ratings)[1]) {
        HungerRating <- rbindlist(list(HungerRating, list(
          PIN, complete,
          format(as.Date(dateTime[hunger_rating_indices[hr]]), "%d-%m-%Y"),
          country,
          ifelse(fromJSON(hunger_ratings$rating_status[hr]) == "pre-rating", fromJSON(hunger_ratings$rating[hr]), ""),
          ifelse(fromJSON(hunger_ratings$rating_status[hr]) == "post-rating", fromJSON(hunger_ratings$rating[hr]), "")
        )))
      }
    }
    
    # ConsentFeedback ---------------------------------------------------------
    
    consent_feedback_index <- which(trialdata$stage_name %in% "\"Close HIT Questions\"")
    
    if(length(consent_feedback_index ) != 0){
      consent_feedback_responses <- fromJSON(trialdata[consent_feedback_index,]$responses)
      
      date <- format(as.Date(dateTime[consent_feedback_index]), "%d-%m-%Y")
      time <- as.character(as.ITime(dateTime[consent_feedback_index]))
      
      for(j in 1:length(consent_feedback_responses)){
        ConsentFeedback <- rbindlist(list(ConsentFeedback, list(
          PIN, complete, date, time, country,
          ifelse(j == 4, 3, j),
          names(consent_feedback_responses)[j] %>% str_replace("^\\d+ :", "") %>% str_trim(),
          consent_feedback_responses[[j]]
        )))
      }
    }

    # PavCondition ------------------------------------------------------------

    pav_condition_index <- which(trialdata$stage_name %in% "\"Pav Conditioning Response\"")
    
    if(length(pav_condition_index) != 0){
      pav_condition_responses <- trialdata[pav_condition_index,]$responses
    
      for(j in 1:length(pav_condition_responses)){
        events <- trialdata[pav_condition_index,]
        response_submitted <- fromJSON(events$response_submitted[j])
        correct <- events$event_raw_details[j]
    
        PavCondition <- rbindlist(list(PavCondition, list(
          PIN, complete, date, time, commit, version, country,
          Q = j,
          response_submitted,
          substring(correct, 1, 1)
        )))
      }
    }
    
    # CompleteData ------------------------------------------------------------

    if(!is.null(trialdata$stage) & !is.null(version) & !is.null(trialdata$events)){
      for(j in 1:length(trialdata$events)){
        if(!is.na(trialdata$events[j]) & trialdata$events[j] != "[]"){
          date <- format(as.Date(dateTime[j]), "%d-%m-%Y")
          time <- as.character(as.ITime(dateTime[j]))
          events <- fromJSON(trialdata$events[j])

          time_elapsed <- trialdata$time_elapsed[j]
          time_ms <- dateTime_ms[j] - time_elapsed

          for(e in 1:nrow(events)){
            CompleteData <- rbindlist(list(CompleteData, list(
              PIN, complete, date, 
              as.character(as.ITime(formatDateTime(time_ms + events$timestamp[e]))),
              events$time_elapsed[e], country, timezone,
              gsub('"', "", trialdata$stage[j]), version, commit, events$event_type[e],
              ifelse(!is.na(trialdata$block_number[j]), trialdata$block_number[j], 'NA'),
              ifelse(!is.na(trialdata$item_id[j]), trialdata$item_id[j], 'NA'),
              ifelse(is.null(events$event_raw_details[e]), NA, events$event_raw_details[e]),
              events$event_converted_details[e]
            )))
          }
        }
      }
    }
    
    setTxtProgressBar(progressBar, i)
  }
  
  close(progressBar)
  dbClearResult(query)

  dbDisconnectAll <- function(){
    ile <- length(dbListConnections(MySQL())  )
    lapply( dbListConnections(MySQL()), function(x) dbDisconnect(x) )
    cat(sprintf("%s connection(s) closed.\n", ile))
  }

  # Writing results ---------------------------------------------------------
  
  cat("\n  Saving results . . .\n")
  
  if(!dir.exists(output_folder))
    dir.create(output_folder)
  
  filesProgressBar <- txtProgressBar(min = 0, max = 6, style = 3, char = '|')
  
  results <- list(
    "Parameters" = Parameters,
    'Demographics' = Demographics,
    "OCI-R" = OCI_R,
    "MOVES" = MOVES,
    "DASS" = DASS,
    "ASRS-5" = ASRS5,
    "EAT-26" = EAT_26,
    "RAADS-14" = RAADS_14,
    "PHQ-9" = PHQ_9,
    "GAD-7" = GAD_7,
    "ASRM" = ASRM,
    "PC-PTSD-5" = PC_PTSD_5,
    "PRIME-R" = PRIME_R,
    "AUDIT" = AUDIT,
    "PGSI" = PGSI,
    "YIAT" = YIAT,
    "SmokingStatus" = SmokingStatus,
    "FTND" = FTND,
    "ISI" = ISI,
    "PID-5-BF" = PID_5_BF,
    "LSAS" = LSAS,
    "ICAR" = ICAR,
    "SDS" = SDS,
    "VVR" = VVR,
    "FoodRatings" = FoodRatings,
    "HungerRating" = HungerRating,
    "ConsentFeedback" = ConsentFeedback,
    "PavCondition" = PavCondition,
    "CompleteData" = CompleteData
  )
  
  for (i in 1:length(results)) {
    if(nrow(results[[i]]) != 0){
      fwrite(results[[i]], str_c(output_folder, "//", names(results)[i], ".csv"), quote = "auto")
    }
    setTxtProgressBar(filesProgressBar, i)
  }

  dbDisconnectAll()
} else {
  print("Invalid database connection or query")
  dbDisconnect(connection)
}
